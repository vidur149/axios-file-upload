import TextField from "@material-ui/core/TextField";
import { Field } from "react-final-form";

export const TextFieldWrapper = (props: any) => {
  const { label, required, name, children, ...rest } = props;
  return (
    <div>
      <Field name={name}>
        {props => {
          const { meta } = props;
          return (
            <TextField
              fullWidth
              label={label}
              {...props}
              {...props.input}
              value={props.input.value}
              onChange={props.input.onChange}
              required={required}
              // variant="filled"
              {...rest}
              helperText={
                (meta.error || meta.submitError) && meta.touched
                  ? meta.error || meta.submitError
                  : ""
              }
              error={(meta.error || meta.submitError) && meta.touched}
            >
              {children}
            </TextField>
          );
        }}
      </Field>
    </div>
  );
};
