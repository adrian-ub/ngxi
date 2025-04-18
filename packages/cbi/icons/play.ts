import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiPlayIcon],svg[cbi-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29.85 18.441c-2.267 1.121-4.495.288-5.985-.299c-1.232-.485-21.803-8.967-21.803-8.967s-1.898-.847.174-1.6c2.556-.93 4.619-.158 7.005.8l20.062 8.055s2.814.89.547 2.011m2.147-.947c-.018-.516-.285-1.433-1.807-2.059L8.237 6.621C7.308 6.239 5.849 6 4.436 6c-.729 0-1.773.067-2.61.389C.35 6.957.052 7.802.016 8.309l-.008-.002L0 14.366l.006.001c.03.487.294 1.261 1.555 1.8l22.539 9.27c.846.36 1.962.563 3.133.563c1.174 0 2.281-.205 3.117-.574c1.443-.638 1.648-1.56 1.643-2.053L32 17.495z"></svg:path>`,
})
export class CbiPlayIcon {
  readonly viewBox = input("0 0 33 32")
  readonly width = input("1.04em")
  readonly height = input("1em")
}
