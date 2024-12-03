import { MenuItem } from '../../api/menuApi';

export interface IModalProps {
  isOpen: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
  burger?: MenuItem;
}