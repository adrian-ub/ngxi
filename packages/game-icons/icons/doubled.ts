import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsDoubledIcon],svg[game-icons-doubled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M304.833 16c-261.69 0-320.71 387.657-62.343 387.657c86.284 0 86.955-129.375 0-129.375c-139.947 0-99.134-202.896 62.343-258.282m-30.938 92.343c-86.283 0-86.955 129.375 0 129.375c139.95 0 88.353 202.896-73.125 258.282c261.69 0 331.49-387.657 73.125-387.657"></svg:path>`,
})
export class GameIconsDoubledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
