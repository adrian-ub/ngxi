import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineModifyIcon],svg[icon-park-outline-modify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m20.07 9.586l-4.242-4.243a2 2 0 0 0-2.828 0L7.343 11a2 2 0 0 0 0 2.829l4.243 4.242m17.343 19.343l4.242 4.243a2 2 0 0 0 2.829 0L41.657 36a2 2 0 0 0 0-2.828l-4.243-4.243"></svg:path><svg:rect width="12" height="42" x="34.606" y="4.908" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" rx="2" transform="rotate(45 34.606 4.908)"></svg:rect><svg:circle cx="24" cy="24" r="2" fill="currentColor"></svg:circle><svg:circle cx="20" cy="28" r="2" fill="currentColor"></svg:circle><svg:circle cx="28" cy="20" r="2" fill="currentColor"></svg:circle></svg:g>`,
})
export class IconParkOutlineModifyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
