import http from "Api/axios.js";

export default {
    createProject(project) {
        let formData = new FormData();
        formData.append('name', project.title);
        formData.append('category', project.category);
        formData.append('dateDue', project.dateDue);

        return http.post('/projects/create', formData)
            .then(response => response.data);
    },

    getProjects() {
        return http.get('/projects')
            .then(response => response.data);
    },

    getProjectById(id) {
        return http.get('/projects/' + id)
            .then(response => response.data);
    },

    updateName(id, name) {
        let formData = new FormData();
        formData.append('id', id);
        formData.append('name', name);

        return http.post('/projects/updateName', formData)
            .then(response => response.data);
    },

    updateCategory(id, category) {
        let formData = new FormData();
        formData.append('id', id);
        formData.append('category', category);

        return http.post('/projects/updateCategory', formData)
            .then(response => response.data);
    },

    updateOrder(id, orderFrom, orderTo) {
        let formData = new FormData();
        formData.append('id', id);
        formData.append('orderFrom', orderFrom);
        formData.append('orderTo', orderTo);

        return http.post('/projects/updateOrder', formData)
            .then(response => {
                console.log(response);
                return response.data 
            });
    },

    updateProjectDateDue(id, dateDue) {
        let formData = new FormData();
        formData.append('id', id);
        formData.append('dateDue', dateDue);

        return http.post('/projects/updateDateDue', formData)
            .then(response => response.data);
    }
}
