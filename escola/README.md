19-------------------------------------------------------
curl -X POST http://localhost:3001/professor -H "Content-Type: application/json" -d "{\"nome\": \"Henrique Louro\", \"email\": \"henrique.louro@fatec.sp.gov.br\", \"cpf\": \"07494812857\"}"

$body = @{
     nome  = "Henrique Louro"
     email = "henrique.louro@fatec.sp.gov.br"
     cpf   = "07494812857"
 } | ConvertTo-Json

 Invoke-RestMethod -Uri "http://localhost:3001/professor" -Method Post -ContentType "application/json" -Body $body
--------------------------------------------------------
curl -X POST http://localhost:3001/professor -H "Content-Type: application/json" -d "{\"nome\": \"Carlos Silva\", \"email\": \"carlos.silva@fatec.sp.gov.br\", \"cpf\": \" 63479695051\"}"

$body = @{
     nome  = "Carlos Silva"
     email = "carlos.silva@fatec.sp.gov.br"
     cpf   = "63479695051"
 } | ConvertTo-Json

 Invoke-RestMethod -Uri "http://localhost:3001/professor" -Method Post -ContentType "application/json" -Body $body
--------------------------------------------------------
curl -X POST http://localhost:3001/professor -H "Content-Type: application/json" -d "{\"nome\": \"Odete Roitman\", \"email\": \"odete.roitman@fatec.sp.gov.br\", \"cpf\": \"32082128016\"}"

$body = @{
     nome  = "Odete Roitman"
     email = "odete.roitman@fatec.sp.gov.br"
     cpf   = "32082128016"
 } | ConvertTo-Json

 Invoke-RestMethod -Uri "http://localhost:3001/professor" -Method Post -ContentType "application/json" -Body $body
20--------------------------------------------------------
curl -X POST http://localhost:3001/professor -H "Content-Type: application/json" -d "{\"nome\": \"Henrique Louro\", \"email\": \"henrique.louro@fatec.sp.gov.br\", \"cpf\": \"07494812857\"}"

$body = @{
     nome  = "Henrique Louro"
     email = "henrique.louro@fatec.sp.gov.br"
     cpf   = "07494812857"
 } | ConvertTo-Json

 Invoke-RestMethod -Uri "http://localhost:3001/professor" -Method Post -ContentType "application/json" -Body $body
21-----------------------------------------------------
curl -X POST http://localhost:3001/professor -H "Content-Type: application/json" -d "{\"nome\": \"Henrique Louro\", \"email\": \"henrique.louro@fatec.sp.gov.br\", \"cpf\": \"12345678910\"}"

$body = @{
     nome  = "Henrique Louro"
     email = "henrique.louro@fatec.sp.gov.br"
     cpf   = "12345678910"
 } | ConvertTo-Json

 Invoke-RestMethod -Uri "http://localhost:3001/professor" -Method Post -ContentType "application/json" -Body $body
22------------------------------------------------------
curl -X POST http://localhost:3001/professor -H "Content-Type: application/json" -d "{\"nome\": \"Henrique Louro\", \"email\": \"henrique.louro@fatec\", \"cpf\": \"12345678910\"}"

$body = @{
     nome  = "Henrique Louro"
     email = "henrique.louro@fatec"
     cpf   = "12345678910"
 } | ConvertTo-Json

 Invoke-RestMethod -Uri "http://localhost:3001/professor" -Method Post -ContentType "application/json" -Body $body
23-----------------------------------------------------
curl -X GET http://localhost:3001/professor

Invoke-RestMethod -Uri "http://localhost:3001/professor" -Method Get
24------------------------------------------------------
curl -X PUT http://localhost:3001/professor -H "Content-Type: application/json" -d "{\"id\":\"5f9c7a6d2b8e4e1b9a0c2d4f\",\"nome\": \"Odetinha Roitman\", \"email\": \"odetinha.roitman@fatec.sp.gov.br\", \"cpf\": \" 32082128016\"}"

$body = @{
    id    = "5f9c7a6d2b8e4e1b9a0c2d4f"
    nome  = "Odetinha Roitman"
    email = "odetinha.roitman@fatec.sp.gov.br"
    cpf   = "32082128016"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:3001/professor" -Method Put -ContentType "application/json" -Body $body
----------------------------------------------------------
curl -X DELETE http://localhost:3001/professor -H "Content-Type: application/json" -d "{\"id\":\"a7b9e1d3f48c2e6a9d0b4c1e\"}"

$body = @{
    id = "a7b9e1d3f48c2e6a9d0b4c1e"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:3001/professor" -Method Delete -ContentType "application/json" -Body $body
----------------------------------------------------------
curl -X GET http://localhost:3001/professor

Invoke-RestMethod -Uri "http://localhost:3001/professor" -Method Get
----------------------------------------------------------
curl -X POST http://localhost:3001/disciplina -H "Content-Type: application/json" -d "{\"descricao\": \"Técnicas de Programação II\"}"

$body = @{
    descricao = "Técnicas de Programação II"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:3001/disciplina" -Method Post -ContentType "application/json" -Body $body
----------------------------------------------------------
curl -X POST http://localhost:3001/disciplina -H "Content-Type: application/json" -d "{\"descricao\": \"Lógica de Programação\"}"

$body = @{
    descricao = "Lógica de Programação"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:3001/disciplina" -Method Post -ContentType "application/json" -Body $body
----------------------------------------------------------
curl -X GET http://localhost:3001/disciplina

Invoke-RestMethod -Uri "http://localhost:3001/disciplina" -Method Get
----------------------------------------------------------
curl -X POST http://localhost:3001/professor_has_disciplina -H "Content-Type: application/json" -d "{\"professor\": \"d4a1e9b37c2f4e8e9a0b1c5d\", \"disciplina\": \"b3c7f5e2642961ce1b3edb9f\"}"

$body = @{
    professor = "d4a1e9b37c2f4e8e9a0b1c5d"
    disciplina = "b3c7f5e2642961ce1b3edb9f"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:3001/professor_has_disciplina" -Method Post -ContentType "application/json" -Body $body

----------------------------------------------------------
curl -X POST http://localhost:3001/professor_has_disciplina -H "Content-Type: application/json" -d "{\"professor\": \"e1f3b4a5682961de2c4f5b7a\", \"disciplina\": \"c4d6a2f7642961ce1b3edb7e\"}"

$body = @{
    professor = "e1f3b4a5682961de2c4f5b7a"
    disciplina = "c4d6a2f7642961ce1b3edb7e"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:3001/professor_has_disciplina" -Method Post -ContentType "application/json" -Body $body
----------------------------------------------------------
curl -X GET http://localhost:3001/professor_has_disciplina

Invoke-RestMethod -Uri "http://localhost:3001/professor_has_disciplina" -Method Get
