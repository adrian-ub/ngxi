import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsBrazilFlagIcon],svg[game-icons-brazil-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 102L20 256l236 154l236-154zm0 54a100 100 0 0 1 100 100a100 100 0 0 1-.504 10.014c-48.123-36.173-110.506-57.542-168.914-56.409c-6.632.13-13.207.566-19.709 1.286A100 100 0 0 1 256 156m-65.568 71.73c55.59.133 116.403 22.059 161.045 57.979A100 100 0 0 1 256 356a100 100 0 0 1-100-100a100 100 0 0 1 3.545-25.943c10.012-1.593 20.354-2.352 30.887-2.327"></svg:path>`,
})
export class GameIconsBrazilFlagIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
