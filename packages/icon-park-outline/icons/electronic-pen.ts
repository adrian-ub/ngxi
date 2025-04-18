import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineElectronicPenIcon],svg[icon-park-outline-electronic-pen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="12" height="38" x="35.193" y="5.322" stroke="currentColor" stroke-width="4" rx="6" transform="rotate(45 35.193 5.322)"></svg:rect><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m18 23l8 8M6 43l6-6"></svg:path><svg:rect width="4" height="4" x="33.268" y="12.34" fill="currentColor" rx="2" transform="rotate(30 33.268 12.34)"></svg:rect></svg:g>`,
})
export class IconParkOutlineElectronicPenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
