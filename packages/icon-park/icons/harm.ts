import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkHarmIcon],svg[icon-park-harm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M6 9.25564L24.0086 4L42 9.25564V20.0337C42 31.3622 34.7502 41.4194 24.0026 45.0005C13.2521 41.4195 6 31.36 6 20.0287V9.25564Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M29.5 18.4081L18.1863 29.7218"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M18.1863 18.4081L29.5 29.7218"></svg:path></svg:g>`,
})
export class IconParkHarmIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
