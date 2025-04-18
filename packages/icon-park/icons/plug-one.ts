import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkPlugOneIcon],svg[icon-park-plug-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:rect width="24" height="24" x="12" y="12" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M24 36V41C24 42.6569 22.6569 44 21 44H8"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M20 12V4"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M28 12V4"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M22 24H26"></svg:path></svg:g>`,
})
export class IconParkPlugOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
