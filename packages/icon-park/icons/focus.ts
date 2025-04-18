import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFocusIcon],svg[icon-park-focus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M16 6H8C6.89543 6 6 6.89543 6 8V16"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M16 42H8C6.89543 42 6 41.1046 6 40V32"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M32 42H40C41.1046 42 42 41.1046 42 40V32"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M32 6H40C41.1046 6 42 6.89543 42 8V16"></svg:path><svg:rect width="20" height="20" x="14" y="14" fill="#2F88FF" stroke="#000" stroke-width="4" rx="10"></svg:rect><svg:circle r="3" fill="#fff" transform="matrix(-1 0 0 1 24 24)"></svg:circle></svg:g>`,
})
export class IconParkFocusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
