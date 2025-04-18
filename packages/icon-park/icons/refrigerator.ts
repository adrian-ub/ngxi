import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkRefrigeratorIcon],svg[icon-park-refrigerator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="28" height="36" x="9" y="4" fill="#2F88FF" stroke="#000" rx="2"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" d="M9 22H37"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M9 20L9 24"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M37 20L37 24"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M15 29L15 33"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M15 11L15 15"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M33 40V44"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M13 40V44"></svg:path></svg:g>`,
})
export class IconParkRefrigeratorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
