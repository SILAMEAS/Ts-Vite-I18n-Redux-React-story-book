import React, {useState} from 'react';

import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import {Type} from '@components/inputField/Type';
import isEmail from 'validator/lib/isEmail';
import Box from '@mui/material/Box';
import {useTranslation} from 'react-i18next';
import {Localization} from '@/i18n/lan';
function InputField({
  textLabel = ' Adresse e-mail',
  setValue,
  value,
  NameId,
  type = 'text',
  placeholder = 'Adresse e-mail',
  handleChangeT,
}: Type) {
  const {t} = useTranslation();
  const [isValid, setIsValid] = useState(false);
  const [dirty, setDirty] = useState(false);
  const [textError, setTextError] = useState('Required');

  const handleChange = (event: any) => {
    const val = event.target.value;
    if (NameId === 'email') {
      if (t(Localization('form', 'email'))) {
        if (isEmail(val)) {
          setIsValid(true);
          setTextError('Success');
        } else {
          if (val === '') {
            setIsValid(false);
            setTextError('Required');
          } else {
            setIsValid(false);
            setTextError('Invalid');
          }
        }
      }
    } else {
      if (val !== 'email') {
        if (val === '') {
          setIsValid(false);
          setTextError('Required');
        } else {
          setIsValid(true);
          setTextError('success');
        }
      }
    }
    setValue(val);
    handleChangeT && handleChangeT({val, isValid, textError});
  };
  return (
    <Box>
      <Typography sx={{fontWeight: 'bold', fontSize: '0.8rem'}}>
        {textLabel}
      </Typography>
      <TextField
        required
        error={dirty && isValid === false}
        onBlur={() => setDirty(true)}
        helperText={textError + '  ' + NameId}
        onChange={event => handleChange(event)}
        id={NameId}
        name={NameId}
        autoComplete={NameId}
        autoFocus
        placeholder={placeholder}
        size={'small'}
        fullWidth
        value={value}
        type={type}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </Box>
  );
}

export default InputField;
