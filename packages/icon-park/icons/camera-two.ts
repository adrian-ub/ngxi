import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCameraTwoIcon],svg[icon-park-camera-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="24" height="32" x="12" y="4" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" rx="12"></svg:rect><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 36V44"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M16 44L32 44"></svg:path><svg:circle cx="24" cy="17" r="6" fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></svg:circle><svg:circle cx="24" cy="29" r="2" fill="#000"></svg:circle></svg:g>`,
})
export class IconParkCameraTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
