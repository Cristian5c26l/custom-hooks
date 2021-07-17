# useForm Hook

Ejemplo de uso:
```javascript

    const initialForm = {//campos iniciales del formulario
        name: '',
        email: ''
    }

    const [ formValues, handleInputChange, reset ] = useForm( initialForm );//valores de los campos del formulario inicial
```