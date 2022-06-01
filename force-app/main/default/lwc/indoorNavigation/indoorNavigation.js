import { LightningElement } from 'lwc';

// import static resources
import NAVI_IMAGES from '@salesforce/resourceUrl/Navi_Images';

// import custom labels
import PRINTBTN from '@salesforce/label/c.Print_Btn_Label';
import CHANGEVIEWBTN from '@salesforce/label/c.Change_View_Btn_Label';

// views available for this application
const VIEWMODE = {
    NAV: 'nav',
    PRINTABLE: 'printable',
};

export default class IndoorNavigation extends LightningElement {
    // the current view diplayed on the screen
    view = VIEWMODE.NAV;

    // stores the custom label values
    label = {
        PRINTBTN,
        CHANGEVIEWBTN,
    };

    // returns true if the current view is navigation
    get inNavigationView() {
        return this.view === VIEWMODE.NAV;
    }

    // returns true if the current view is printable
    get inPrintableView() {
        return this.view === VIEWMODE.PRINTABLE;
    }

    // data
    directions = [
        {
            title: 'Waiting Room',
            description: 'Begin from the waiting area, head staight to the back of the room.',
            image: NAVI_IMAGES + '/waiting_room.jpg',
        },
        {
            title: 'Hallway',
            description: 'Head straight towards the end of the hallway.',
            image: NAVI_IMAGES + '/hallway.jpg',
        },
        {
            title: 'Ultrasound',
            description: 'Make a right to arrive at Ultrasound.',
            image: NAVI_IMAGES + '/ultrasound.jpg',
        },
    ];

    // this method runs automatically when this component is initialized
    connectedCallback() {
        // modify the title to all capitals using the arrow function
        // this code here is equal to the for loop as follow
        // for(let i=0; i < this.directions.length; i++){
        //    this.directions[i].title = this.directions[i].title.toUpperCase();
        // }

        this.directions.forEach((direction) => {
            direction.title = direction.title.toUpperCase();
        });
    }

    // toggles the current view
    toggleView() {
        if (this.view === VIEWMODE.NAV) {
            this.view = VIEWMODE.PRINTABLE;
            console.log('display printable view');
        } else {
            this.view = VIEWMODE.NAV;
            console.log('display nav view');
        }
    }

    // prints the contents of the current window
    handlePrint() {
        window.print();
    }
}
