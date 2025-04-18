import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineDataScreenIcon],svg[icon-park-outline-data-screen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="40" height="30" x="4" y="6" rx="3"></svg:rect><svg:path d="M24 36v7m8-29L16 28m-6 15h28"></svg:path><svg:circle cx="15" cy="17" r="3"></svg:circle><svg:circle cx="33" cy="25" r="3"></svg:circle></svg:g>`,
})
export class IconParkOutlineDataScreenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
