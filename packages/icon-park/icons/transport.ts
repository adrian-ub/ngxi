import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTransportIcon],svg[icon-park-transport-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:rect width="28" height="18" x="16" y="12" fill="#2F88FF" stroke="#000" stroke-linejoin="round" rx="3"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" d="M24 18V24"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M36 18V24"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M36 12V6H24V12"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M44 36H12C10.8954 36 10 35.1046 10 34V11C10 9.89543 9.10457 9 8 9H4"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M19 42C17.3431 42 16 40.6569 16 39V36H22V39C22 40.6569 20.6569 42 19 42Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M37 42C35.3431 42 34 40.6569 34 39V36H40V39C40 40.6569 38.6569 42 37 42Z"></svg:path></svg:g>`,
})
export class IconParkTransportIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
