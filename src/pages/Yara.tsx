import { useState, useEffect } from 'react';
import CardUser from '../components/CardUser'; 
import { type GitHubUser } from '../interface/GithubAPI';
import { Link } from 'react-router-dom';

export default function Yara() {
    const [YaraUser, setYaraUser] = useState<GitHubUser | null>(null);
    const [loading, setLoading] = useState(true);
    
    const githubUsername = "Yarafr";

    useEffect(() => {
        
        async function fetchUserData() {
            try {
                setLoading(true);
                const response = await fetch(`https://api.github.com/users/${githubUsername}`);
                const data = await response.json();
                setYaraUser(data); 
            } catch (error) {
                console.error("Erro ao buscar dados do GitHub:", error);
            } finally {
                setLoading(false); 
            }
        }

        fetchUserData(); 
    }, []); 

    if (loading) {
        return <div style={{ textAlign: 'center', margin: '20px' }}>Carregando perfil...</div>;
    }

    if (!YaraUser) {
        return <div style={{ textAlign: 'center', margin: '20px' }}>Não foi possível carregar o perfil.</div>;
    }

    return (
        <div className="profile-page" style={{ textAlign: 'center' }}>
            <h2>Meu Perfil</h2>
            
            <CardUser user={YaraUser} />
            
            <p>Prazer, Yara.</p>
            
            <Link to="/">Voltar para a Home</Link> 
        </div>
    );
}