import Button from '@mui/material/Button';
import {useTranslation} from 'react-i18next';
import AddIcon from '@mui/icons-material/Add';
import {Localization} from '@/i18n/lan';
import '@fontsource/roboto/400.css';

export const ButtonComponent = () => {
  const {t} = useTranslation();
  return (
    <div>
      <Button
        variant={'contained'}
        color={'primary'}
        sx={{textTransform: 'none'}}
        disableElevation
        endIcon={<AddIcon />}>
        {t(Localization('folder', 'new-folder'))}
      </Button>
    </div>
  );
};

export default ButtonComponent;
