import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineCloseRemindIcon],svg[icon-park-outline-close-remind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M42 38s-6-5-6-19c0-6.627-5.373-12-12-12c-2.54 0-4.896.79-6.835 2.136M30 38H6s5.57-4.641 5.977-17.5"></svg:path><svg:path stroke="currentColor" stroke-width="4" d="M18 38h12a6 6 0 0 1-12 0Z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M24 2a4 4 0 0 0-4 4h8a4 4 0 0 0-4-4" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m7 6.5l34 38"></svg:path></svg:g>`,
})
export class IconParkOutlineCloseRemindIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
