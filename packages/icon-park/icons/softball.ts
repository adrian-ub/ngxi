import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSoftballIcon],svg[icon-park-softball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4"><svg:path d="M24 44C35.05 44 44 35.05 44 24C44 12.95 35.05 4 24 4C12.95 4 4 12.95 4 24C4 35.05 12.95 44 24 44Z"></svg:path><svg:path stroke-linecap="round" d="M10 38C13.7 34.37 16 29.59 16 24C16 18.48 13.62 13.62 10 10"></svg:path><svg:path stroke-linecap="round" d="M38 38C34.3 34.37 32 29.59 32 24C32 18.48 34.38 13.62 38 10"></svg:path><svg:path stroke-linecap="round" d="M28 24H36"></svg:path><svg:path stroke-linecap="round" d="M12 24H20"></svg:path><svg:path stroke-linecap="round" d="M30 34L36 31"></svg:path><svg:path stroke-linecap="round" d="M36 17L30 14"></svg:path><svg:path stroke-linecap="round" d="M18 34L12 31"></svg:path><svg:path stroke-linecap="round" d="M12 17L18 14"></svg:path></svg:g>`,
})
export class IconParkSoftballIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
