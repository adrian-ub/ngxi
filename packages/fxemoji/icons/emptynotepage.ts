import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fxemojiEmptynotepageIcon],svg[fxemoji-emptynotepage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FFD469" d="M444.027 452.829H67.973a8.8 8.8 0 0 1-8.802-8.802V67.973a8.8 8.8 0 0 1 8.802-8.802h376.215a8.64 8.64 0 0 1 8.64 8.64v376.215a8.8 8.8 0 0 1-8.801 8.803"></svg:path>`,
})
export class FxemojiEmptynotepageIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
