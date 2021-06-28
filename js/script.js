



var app = new Vue ({

    el: '#app',

    data: {
        
        contacts: [

            {
                name: 'Michele', 
                avatar: 'avatar_1.jpg', 
                visibile: true, 
                message: [
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
                avatar: 'avatar_2.jpg', 
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

        ]

    },

    methods: {



    }

});