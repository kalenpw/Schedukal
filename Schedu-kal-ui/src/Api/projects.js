import http from "./axios";

export default {
    createProject(title, category, dateDue){
        let formData = new FormData();
        formData.append('name', title);
        formData.append('category', category);
        formData.append('dateDue', dateDue);

        return http.post('/projects/create', formData)
            .then(response => response.data);
    },

    getProjects(){
        return http.get('/projects')
            .then(response => response.data);
    },
    
    getProjectById(id){
        return http.get('/projects/' + id)
            .then(response => response.data);
    }
}