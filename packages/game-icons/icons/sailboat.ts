import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsSailboatIcon],svg[game-icons-sailboat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M199.256 74.5v285H27.744l25.998 78h326.513l104-78h-267v-285h-18zm18 18c36.787 88.85 64.94 216 0 250h208c22-34-11.905-164.76-208-250m-36 0c-33.046 69.333-50 200-144 250h144z"></svg:path>`,
})
export class GameIconsSailboatIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
