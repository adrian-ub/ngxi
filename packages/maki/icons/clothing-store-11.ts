import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiClothingStore11Icon],svg[maki-clothing-store-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M2.5 1l-2 2v2h2v5h6V5h2V3l-2-2H7L5.5 4L4 1H2.5z" fill="currentColor"></svg:path>`,
})
export class MakiClothingStore11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
