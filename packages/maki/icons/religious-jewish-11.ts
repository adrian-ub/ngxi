import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiReligiousJewish11Icon],svg[maki-religious-jewish-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M11 8H7.1l-1.6 3l-1.6-3H0l1.95-2.5L0 3h3.9l1.6-3l1.6 3H11L9.05 5.5L11 8z" fill="currentColor"></svg:path>`,
})
export class MakiReligiousJewish11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
