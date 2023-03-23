
## Nova conversa sobre: Config_Env_Windows
 Wed Mar 22 2023 23:20:27 GMT-0300 (Horário Padrão de Brasília)

**Pergunta:** como corrigir este erro? nest : O arquivo C:\Users\wcmca\AppData\Roaming\npm\nest.ps1 não pode ser carregado porque a execução de scripts 

**Resposta:** 

Para corrigir esse erro, você precisa permitir a execução de scripts no seu sistema. Isso pode ser feito seguindo os seguintes passos:

1. Abra o PowerShell como Administrador.

2. Execute o comando abaixo para verificar a política de execução atual:

    Get-ExecutionPolicy

3. Se a política for diferente de "RemoteSigned" ou "Unrestricted", execute o comando abaixo para alterá-la:

    Set-ExecutionPolicy RemoteSigned -Scope CurrentUser

4. Em seguida, você pode tentar executar o comando novamente e verificar se o erro foi corrigido.

