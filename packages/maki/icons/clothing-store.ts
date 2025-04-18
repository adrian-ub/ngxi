import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiClothingStoreIcon],svg[maki-clothing-store-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2L1 4.5V7h3v6h7V7h3V4.5L11 2H9.5l-2 4l-2-4z"></svg:path>`,
})
export class MakiClothingStoreIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
