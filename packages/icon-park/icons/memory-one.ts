import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMemoryOneIcon],svg[icon-park-memory-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="38" height="14" x="5" y="28" fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></svg:rect><svg:rect width="38" height="14" x="5" y="6" fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></svg:rect><svg:rect width="4" height="4" x="11" y="11" fill="#fff" rx="2"></svg:rect><svg:rect width="4" height="4" x="11" y="33" fill="#fff" rx="2"></svg:rect><svg:rect width="4" height="4" x="19" y="11" fill="#fff" rx="2"></svg:rect><svg:rect width="4" height="4" x="19" y="33" fill="#fff" rx="2"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M31 13H35"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M31 35H35"></svg:path></svg:g>`,
})
export class IconParkMemoryOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
