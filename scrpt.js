document.addEventListener('DOMContentLoaded', () => {
    const newsContainer = document.getElementById('news-container');

    const newsArticles = [
        {
            title: "Notícia 1",
            description: "Descrição da notícia 1..."
        },
        {
            title: "Notícia 2",
            description: "Descrição da notícia 2..."
        },
        {
            title: "Notícia 3",
            description: "Descrição da notícia 3..."
        }
    ];

    // Function to render news articles
    function renderNews() {
        newsArticles.forEach(article => {
            const articleDiv = document.createElement('div');
            articleDiv.classList.add('news-card');
            articleDiv.innerHTML = `
                <h3>${article.title}</h3>
                <p>${article.description}</p>
            `;
            newsContainer.appendChild(articleDiv);
        });
    }

    renderNews();
});