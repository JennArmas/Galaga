function Enemy (x, y, board, enemiesArray) {
    let self = this
    this.x = x
    this.y = y
    this.width = 50
    this.heigth = 50
    this.direction = 1
    this.speed = 5
    this.sprite = document.createElement('div') 

    this.insertEnemy= function () {
        this.sprite.setAttribute('id, 'enemy')
        this.sprite.style.top = this.y + 'px'
        this.sprite.style.left = this.x + 'px'
        board.appendChild(this.sprite)
    }

    this.removeEnemy = function (index) {
        if (self.y>= 750) {
        enemiesArray.shift()             
        } else {
            enemiesArray.splice(index,1)

        }
        board.removeChild(this.sprite)
        clearInterval(this.timerId)
    }

    this.move = function () {
        let newCoordY = self.y + self.speed * self.direction
        if (newCoordY <= 750 && newCoordX >= 0) {
            this.y = newCoordY
            this.sprite.style.left = this.y + 'px'
        }
        if(self.y>=750) {
            self.removeEnemy()
        }
    } 
    this.checkCollision = function () {
        if (self.x < player.x + player.width &&
            self.y < player.y + player.heigth &&
            self.x + self.width > player.x && 
            self.y + self.heigth > player.y) {
                player.isDead = true
                console.log('BAMMMM!!!')
            }
    }

    this.timerId = setInterval(this.move, 5)
} 