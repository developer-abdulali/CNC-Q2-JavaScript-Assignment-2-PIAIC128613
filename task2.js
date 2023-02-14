var trafficsignals = prompt('Enter traffic signals color', 'Red,Yellow, Green');

if (trafficsignals.toLowerCase() === 'red'){
    alert('Must stop');
} else if (trafficsignals.toLowerCase() === 'yellow'){
    alert('Ready to move');
} else if (trafficsignals.toLowerCase() === 'green'){
    alert('Move now ');
}