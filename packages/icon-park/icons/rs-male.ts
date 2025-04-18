import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkRsMaleIcon],svg[icon-park-rs-male-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M4.30958 16.2702C4.14582 15.0694 5.07926 14 6.29124 14H41.7088C42.9207 14 43.8542 15.0694 43.6904 16.2702L41.2359 34.2702C41.1007 35.2612 40.2544 36 39.2542 36H8.74578C7.74564 36 6.89925 35.2612 6.76412 34.2702L4.30958 16.2702Z"></svg:path><svg:path stroke="#fff" d="M19 22H21"></svg:path><svg:path stroke="#fff" d="M23 28H25"></svg:path><svg:path stroke="#fff" d="M11 22H13"></svg:path><svg:path stroke="#fff" d="M15 28H17"></svg:path><svg:path stroke="#fff" d="M27 22H29"></svg:path><svg:path stroke="#fff" d="M31 28H33"></svg:path><svg:path stroke="#fff" d="M35 22H37"></svg:path></svg:g>`,
})
export class IconParkRsMaleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
