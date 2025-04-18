import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSwipeDownAltIcon],svg[material-symbols-swipe-down-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 22l-4-4l1.4-1.425l1.6 1.6V13.9q-1.725-.35-2.863-1.713T7 9q0-2.075 1.463-3.537T12 4t3.538 1.463T17 9q0 1.825-1.137 3.188T13 13.9v4.275l1.6-1.575L16 18z"></svg:path>`,
})
export class MaterialSymbolsSwipeDownAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
