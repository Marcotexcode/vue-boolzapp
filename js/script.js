



var app = new Vue ({

    el: '#app',

    data: {
        
        messaggio: '',
        ricerca: '',
        counter: 0,

        contacts: [
            {
                name: 'Michele', 
                avatar: 'img/avatar_1.jpg', 
                visibile: true, 
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?', 
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare', 
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22', 
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],           
            },

            {
                name: 'Fabio', 
                avatar: 'img/avatar_2.jpg', 
                visible: true, 
                messages: [
                    {
                        date: '20/03/2020 16:30:00', 
                        text: 'Ciao come stai?', 
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?', 
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.', 
                        status: 'sent'
                    }
                ],
            },

            {
                name: 'Samuele', 
                avatar: 'img/avatar_3.jpg', 
                visibile: true, 
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'ciao, come stai?', 
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Tutto bene?', 
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22', 
                        text: 'Ciao si tutto ok!',
                        status: 'received'
                    }
                ],
            },

            {
                name: 'Luiso', 
                avatar: 'img/avatar_4.jpg', 
                visible: true, 
                messages: [
                    {
                        date: '20/03/2020 16:30:00', 
                        text: 'Hai finito di studiare?', 
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Si', 
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Ok, perfetto', 
                        status: 'sent'
                    }
                ],
            },

        ]
        
    },

    methods: {
        
        change(indice) {

            this.counter = indice;
        },

        addMex() {

            this.contacts[this.counter].messages.push({text: this.messaggio, status: 'received',date: dayjs().format('DD/MM/YYYY H:mm:ss')});

                if(this.text = this.messaggio){

                    var time = setTimeout(() => {

                        this.contacts[this.counter].messages.push({text: 'Ok', status: 'sent', date: dayjs().format('DD/MM/YYYY H:mm:ss')});
                    
                    }, 1000);

                }

            this.messaggio = '';
            
        },

        search() {

            return this.contacts.filter(

                element => {

                    return element.name.toLocaleLowerCase().includes(this.ricerca.toLowerCase());
            
                }
        
            );

        },

        // remove(elemento) {

        //     this.contacts.splice(elemento, 1);

        // }
                
    }

    
    
});

