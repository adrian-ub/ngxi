import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siArchiveDuotoneIcon],svg[si-archive-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" fill-rule="evenodd" d="M16.75 7h-9.5v2.2c0 .856.694 1.55 1.55 1.55h6.4a1.55 1.55 0 0 0 1.55-1.55z" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m21 7l-1 11.6c0 1.33-1.07 2.4-2.4 2.4H6.4C5.07 21 4 19.93 4 18.6L3 7zM2.6 3h18.8A1.6 1.6 0 0 1 23 4.6v.8A1.6 1.6 0 0 1 21.4 7H2.6A1.6 1.6 0 0 1 1 5.4v-.8A1.6 1.6 0 0 1 2.6 3M16 9.2a.8.8 0 0 1-.8.8H8.8a.8.8 0 0 1-.8-.8V7h8z"></svg:path></svg:g>`,
})
export class SiArchiveDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
