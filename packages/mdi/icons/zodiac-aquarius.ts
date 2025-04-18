import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiZodiacAquariusIcon],svg[mdi-zodiac-aquarius-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15 12.41l-3-3l-3 3l-3-3l-2.29 2.3l-1.42-1.42L6 6.59l3 3l3-3l3 3l3-3l3.71 3.7l-1.42 1.42L18 9.41zm3 3l2.29 2.3l1.42-1.42l-3.71-3.7l-3 3l-3-3l-3 3l-3-3l-3.71 3.7l1.42 1.42L6 15.41l3 3l3-3l3 3z"></svg:path>`,
})
export class MdiZodiacAquariusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
