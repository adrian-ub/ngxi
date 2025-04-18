import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoSmallBlueDiamondIcon],svg[noto-small-blue-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1976D2" d="m65.9 43.5l18.5 18.4c1.1 1.1 1 2.9-.1 3.9L65.9 84.4c-1.1 1.1-2.9 1.1-4 0L43.5 65.9a2.81 2.81 0 0 1-.1-3.9l18.5-18.4c1.1-1.2 2.9-1.2 4-.1"></svg:path><svg:path fill="#2196F3" d="M62.9 46.1L79 62.2c.9 1 .9 2.5-.1 3.4l-16 16.2c-1 1-2.5 1-3.5 0L43.3 65.7c-1-.9-1-2.5-.1-3.4l16.2-16.1c1-1 2.5-1 3.5-.1"></svg:path><svg:path fill="#90CAF9" d="M60 47.5c-.5.4-11.7 11.5-11.7 11.5s-.9.8-.3 1.7c.6.8 1.5.4 2 0s10.5-10.3 10.9-10.8s.5-1.4.2-1.9c-.2-.7-.7-.7-1.1-.5"></svg:path><svg:circle cx="46.8" cy="62.7" r="1.2" fill="#90CAF9"></svg:circle>`,
})
export class NotoSmallBlueDiamondIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
