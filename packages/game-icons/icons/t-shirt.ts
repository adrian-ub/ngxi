import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsTShirtIcon],svg[game-icons-t-shirt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m32 144l48 64l64-32l-16 304c64 16 192 16 256 0l-16-304l64 32l48-64l-112-96l-48-16c-16 64-112 64-128 0l-48 16z"></svg:path>`,
})
export class GameIconsTShirtIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
