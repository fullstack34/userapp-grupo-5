export default function MenuHtml() {
    return `
        <nav class="navbar navbar-expand-sm sidebar">
            <div class="collapse navbar-collapse" id="nav-target">
                <div>
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-link nav-item">
                            <a href="./index.html" class="nav-link">
                                <span class="text nav-text">W E B W I S E</span>
                            </a>
                        </li>
                        <li class="nav-link nav-item">
                            <a href="address-form.html" class="nav-link">
                                <i class="fa-regular fa-compass icon"></i>
                                <span class="text nav-text">Cadastro endereço</span>
                            </a>
                        </li>
                        <li class="nav-link nav-item">
                            <a href="address-list.html" class="nav-link">
                                <i class="fa-regular fa-address-book icon"></i>
                                <span class="text nav-text">Listar endereço</span>
                            </a>
                        </li>
                        <li class="nav-link nav-item">
                            <a href="#" class="nav-link">
                                <i class="bx bx-bell icon"></i>
                                <span class="text nav-text">Notificações</span>
                            </a>
                        </li>
                        <li class="nav-link nav-item">
                            <a href="#" class="nav-link">
                                <i class="bx bx-pie-chart-alt icon"></i>
                                <span class="text nav-text">Análises</span>
                            </a>
                        </li>
                        <li class="nav-link nav-item">
                            <a href="#" class="nav-link">
                                <i class="bx bx-heart icon"></i>
                                <span class="text nav-text">Curtidas</span>
                            </a>
                        </li>
                        <li class="nav-link nav-item">
                            <a href="#" class="nav-link">
                                <i class="bx bx-cog icon"></i>
                                <span class="text nav-text">Configurações</span>
                            </a>
                        </li>
                        <li class="nav-link nav-item">
                            <a href="../index.html" class="nav-link">
                                <i class="bx bx-log-out icon"></i>
                                <span class="text nav-text">Retornar</span>
                            </a>
                        </li>
                        <li class="mode nav-link nav-item">
                            <span class="mode-text">Modo escuro</span>
                            <div class="toggle-switch">
                                <span class="toggle-switch switch"></span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    `;
}
