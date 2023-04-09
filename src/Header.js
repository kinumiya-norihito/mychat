import { TitleLogo } from './TitleLogo.js';
import { CreateThread } from './CreateThread.js';

export const Header = (props) => {
    return (
        <header>
            <TitleLogo className="title_logo" />
            <CreateThread className="create_thread" />
        </header>
    );
};