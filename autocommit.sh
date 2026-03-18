#!/bin/bash

# Интервал проверки в секундах (например, каждые 60 секунд)
INTERVAL=60

echo "🚀 Автокоммит запущен. Интервал: $INTERVAL сек."

while true; do
  # Проверяем, есть ли изменения в рабочей директории
  if [[ -n $(git status -s) ]]; then
    # Добавляем все изменения
    git add .
    
    # Формируем сообщение с текущим временем и списком измененных файлов
    TIMESTAMP=$(date "+%Y-%m-%d %H:%M:%S")
    FILES=$(git diff --cached --name-only | tr '\n' ' ' | cut -c1-50)
    
    git commit -m "Auto: $TIMESTAMP | Изменено: $FILES"
    
    echo "✅ Закоммичено в $TIMESTAMP: $FILES"
  fi
  
  sleep $INTERVAL
done