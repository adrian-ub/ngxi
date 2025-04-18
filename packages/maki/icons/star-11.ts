import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiStar11Icon],svg[maki-star-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M5.4 0L4 3.5H0l3 3L1.5 11l3.9-2.6L9.5 11L8 6.5l3-3H7L5.4 0z" fill="currentColor"></svg:path>`,
})
export class MakiStar11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
