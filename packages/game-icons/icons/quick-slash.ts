import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsQuickSlashIcon],svg[game-icons-quick-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M270.877 444.542C576.857 496.618 318.44 29.007 23.097 25.68C447.57-7.506 696.864 640.745 270.878 444.54z"></svg:path>`,
})
export class GameIconsQuickSlashIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
