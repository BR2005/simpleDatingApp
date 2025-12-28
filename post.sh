curl -X PUT http://localhost:3000/profile/123 \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John",
    "description": "Backend developer"
  }'
