window.addEventListener('load', () => {
    const form = document.querySelector('.form');
    const title = document.getElementById('task-title');
    const desc = document.getElementById('task-desc');
    const date = document.getElementById('task-date');
    const list = document.getElementById('task' );


    form.addEventListener('submit', (e) =>{
        e.preventDefault();
        console.log('submit form');
        if(!title ){
            alert('please fill in the form');
            return; 
        } 
        const task_el = document.createElement('div')
        task_el.classList.add('task')

        const title_el = document.createElement('div')
        title_el.classList.add('title')
        title_el.innerText = title.value;

        const desc_el = document.createElement('div')
        desc_el.classList.add('desc')
        desc_el.innerText = desc.value;

        const date_el = document.createElement('div')
        date_el.classList.add('date')
        date_el.innerText = date.value;

        // eddit button
        const edit_el = document.createElement('button')
        edit_el.classList.add('edit')
        edit_el.innerText = 'Edit'

        edit_el.addEventListener('click', () => {

        })

        // delete button
        const delete_el = document.createElement('button')
        delete_el.classList.add('delete')
        delete_el.innerText = 'Delete'

        delete_el.addEventListener('click', () => {
            task_el.removeChild(edit_el)
            task_el.removeChild(desc_el)
            task_el.removeChild(title_el)
            task_el.removeChild(date_el)
            task_el.removeChild(delete_el)
        })



        task_el.appendChild(title_el)
        task_el.appendChild(desc_el)
        task_el.appendChild(date_el)
        task_el.appendChild(edit_el)
        task_el.appendChild(delete_el)
        // task_el.appendChild(task_el)
        document.querySelector('.task-list').appendChild(task_el)

    })
})








