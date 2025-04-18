import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkShipIcon],svg[icon-park-ship-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M6 20.3768L24 14L42 20.3768L36.6667 34H11.3333L6 20.3768Z" clip-rule="evenodd"></svg:path><svg:path fill="#2F88FF" d="M13 8H35L34.9976 17.8961L24 14L13 17.8958V8Z"></svg:path><svg:path stroke-linecap="round" d="M24 8V4"></svg:path><svg:path stroke-linecap="round" d="M24 24V16"></svg:path><svg:path stroke-linecap="round" d="M10 40L13.5 44L17 40L20.5 44L24 40L27.5 44L31 40L34.5 44L38 40"></svg:path></svg:g>`,
})
export class IconParkShipIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
