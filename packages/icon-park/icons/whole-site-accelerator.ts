import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkWholeSiteAcceleratorIcon],svg[icon-park-whole-site-accelerator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:circle cx="22" cy="40" r="4" fill="#2F88FF"></svg:circle><svg:circle cx="26" cy="8" r="4" fill="#2F88FF"></svg:circle><svg:circle cx="36" cy="24" r="4" fill="#2F88FF"></svg:circle><svg:circle cx="12" cy="24" r="4" fill="#2F88FF"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M32 24L16 24"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M23 11L15 21"></svg:path><svg:path d="M32.9998 27L24.9987 37"></svg:path></svg:g>`,
})
export class IconParkWholeSiteAcceleratorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
