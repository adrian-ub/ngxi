import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsShadowsocksIcon],svg[arcticons-shadowsocks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.53 6.78a.26.26 0 0 1 .22.31l-6.39 28.17a.22.22 0 0 1-.28.16l-13.64-4.3a.52.52 0 0 1-.25-.83l11.6-14.17l-.11-.12l-16.07 13.84a.58.58 0 0 1-.54.09l-11.2-4.41a.21.21 0 0 1 0-.38L40.39 6.81h.14Zm-20.4 27l6.69-.69l-6.41 8a.28.28 0 0 1-.5-.18l.17-10.47"></svg:path>`,
})
export class ArcticonsShadowsocksIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
