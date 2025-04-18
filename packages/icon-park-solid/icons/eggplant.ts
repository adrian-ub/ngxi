import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidEggplantIcon],svg[icon-park-solid-eggplant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path d="m35 18l-3.88 12.612c-.08.259-.155.514-.248.768c-.548 1.498-2.99 7.04-9.871 9.62C13 44 4.999 40 5 32.077S13 25 17 22s8-9 8-9"></svg:path><svg:path fill="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.255 24.488S40.372 19.176 40 16c-.505-4.327-2.5-7.5-5-9s-7.748-2.5-12 0c-4.253 2.5-6.033 5.845-6.033 5.845l8.206-.767a1 1 0 0 1 1.055.72l1.497 5.24a1 1 0 0 0 1.236.688l5.282-1.51a1 1 0 0 1 1.145.468z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m36 8l6-2"></svg:path></svg:g>`,
})
export class IconParkSolidEggplantIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
