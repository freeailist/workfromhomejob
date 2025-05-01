$(document).ready(function() {
    // WhatsApp button functionality
    $('#whatsappBtn').click(function() {
        const phoneNumber = '9832278399';
        const message = encodeURIComponent('I AM INTERESTED SOFTWARE CODE PML046');
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
        
        window.open(whatsappUrl, '_blank');
    });
    
    // Animation for sections
    $('.section').each(function(index) {
        $(this).css('opacity', 0);
        $(this).animate({
            opacity: 1
        }, 500 + (index * 200));
    });
});