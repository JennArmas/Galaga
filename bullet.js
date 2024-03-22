unction Bullet (x, y, board) {
    let self = this
    this.x = x
    this.y = y
    this.width = 50
    this.heigth = 50
    this.direction = 1
    this.speed = 5
    this.sprite = document.createElement('div') 

    this.insertBullet = function () {
        this.sprite.setAttribute('class', 'bullet')
        this.sprite.style.top = this.y + 'px'
        this.sprite.style.left = this.x + 'px'
        board.appendChild(this.sprite)
    }

    this.move = function () {
        let newCoordY = self.y + self.speed * self.direction
        if (newCoordY <= 750 && newCoordX >= 0) {
            this.y = newCoordY
            this.sprite.style.left = this.y + 'px'
        }

        if(self.y<=750) {
            self.removeBullet()
        }
    } 
    this.removeBullet = function () {
        clearInterval(this.timerId)
        board.removeChild(this.sprite)
    }
    this.checkCollision = function () {
        enemiesArray.forEach(function(enemy) {
            if (self.x < enemy.x + enemy.width &&
                self.y < enemy.y + enemy.heigth &&
                self.x + self.width > enemy.x && 
                self.y + self.heigth > enemy.y) {
                    enemy.removeEnemy (index)
                    self.removeBullet()
                }  
        })
    }
    this.timerId = setInterval(this.move, 25)
}    