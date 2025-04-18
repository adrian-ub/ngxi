import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSignalIcon],svg[icon-park-signal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M40 6V42"></svg:path><svg:path d="M29 16V42"></svg:path><svg:path d="M19 26V42"></svg:path><svg:path d="M8 36V42"></svg:path></svg:g>`,
})
export class IconParkSignalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
