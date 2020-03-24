import React from "react";
import FormHelperText from "@material-ui/core/FormHelperText";
import Typography from "@material-ui/core/Typography";
import { Field } from "react-final-form";

const readURL = (file, callback) => {
  let reader = new FileReader();
  reader.onload = callback;
  if (file) {
    reader.readAsDataURL(file);
  }
};

const adaptFileEventToValue = delegate => e => {
  e.persist();
  readURL(e.target.files[0], eve =>
    delegate({ data: eve.target.result, file: e.target.files[0] })
  );
};

const handleFileUpload = files => {
  const filePromises = [];
  Array.from(files).forEach((file, index) =>
    filePromises.push(
      new Promise(res => {
        return readURL(file, eve =>
          res({
            data: eve.target.result,
            file: file
          })
        );
      })
    )
  );

  return Promise.all(filePromises).then(res => {
    return res;
  });
};

const multipleFiles = (e, value, onChange) => {
  if (e.target.files && e.target.files[0]) {
    let reader = new FileReader();
    const file = e.target.files[0];
    reader.readAsDataURL(file);
    handleFileUpload(e.target.files).then(res => {
      if (value && value.length > 0) {
        onChange(value.concat(res));
      } else {
        onChange(res);
      }
    });
  }
};

const FileUpload = ({
  name,
  multi,
  label,
  required,
  labelStyle,
  isImg,
  imgStyle,
  inputStyle,
  showName,
  ...rest
}: any) => {
  return (
    <Field name={name}>
      {props => {
        const { meta } = props;
        const {
          input: { onChange, value }
        } = props;
        return (
          <div style={{ position: "relative" }}>
            {!value && <div style={labelStyle}>{label}</div>}
            {value && isImg && <img src={value.data} style={imgStyle} />}
            {value && showName && <Typography>{value.file.name}</Typography>}
            <input
              style={{
                height: "150px",
                width: "100%",
                cursor: "pointer",
                position: "absolute",
                top: 0,
                left: 0,
                opacity: 0,
                ...inputStyle
              }}
              onChange={
                multi
                  ? e => multipleFiles(e, value, onChange)
                  : adaptFileEventToValue(onChange)
              }
              type="file"
              {...rest}
            />

            {(meta.error || meta.submitError) && meta.touched && (
              <FormHelperText error>
                {meta.error || meta.submitError}
              </FormHelperText>
            )}
          </div>
        );
      }}
    </Field>
  );
};

export default FileUpload;
