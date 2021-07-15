import { useStore } from '../../../hooks/useStore';
import { useFormik } from 'formik';
import { useEffect } from 'react';

function Form(props) {
  const initialFormValues = props.fields.reduce((acc, field) => {
    acc[field.name] = field.initialValue;
    return acc;
  }, {});

  const store = useStore();

  const formik = useFormik({
    initialValues: initialFormValues,
  });

  const handleSubmit = e => {
    e.preventDefault;

    const formValues = formik.values;
    window.alert(JSON.stringify(formik.values, null, 2));

    store.addItem(formValues);
    console.log({ e, formValues, store });
  };

  useEffect(() => console.log(store.itemsList), [store]);

  return (
    <form>
      {props.fields.map(field => (
        <div key={field.name}>
          <label htmlFor={field.name}>{field.name}</label>
          <input
            type={field.type}
            id={field.name}
            name={field.name}
            onChange={formik.handleChange}
            value={formik.values[field.name]}
          />
        </div>
      ))}
      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}

export default Form;
