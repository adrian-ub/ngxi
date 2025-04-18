import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkAutoFocusIcon],svg[icon-park-auto-focus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="24" cy="24" r="9" fill="#2F88FF" stroke="#000" stroke-width="4"></svg:circle><svg:circle r="3" fill="#fff" transform="matrix(-1 0 0 1 24 24)"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M9 13.9999C9 13.9999 16.5 2.49984 29.5 6.99986C42.5 11.4999 42 24.4999 42 24.4999"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M39 34C39 34 33 45 19.5 41.5C6 38 6 24 6 24"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M42 8V24"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6 24L6 40"></svg:path></svg:g>`,
})
export class IconParkAutoFocusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
