import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsLockDuotoneLineIcon],svg[lets-icons-lock-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" stroke="currentColor" stroke-width="1.2" d="M4 13c0-1.886 0-2.828.586-3.414S6.114 9 8 9h8c1.886 0 2.828 0 3.414.586S20 11.114 20 13v2c0 2.828 0 4.243-.879 5.121C18.243 21 16.828 21 14 21h-4c-2.828 0-4.243 0-5.121-.879C4 19.243 4 17.828 4 15z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.2" d="M16 8V7a4 4 0 0 0-4-4v0a4 4 0 0 0-4 4v1"></svg:path><svg:circle cx="12" cy="15" r="2" fill="currentColor"></svg:circle></svg:g>`,
})
export class LetsIconsLockDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
