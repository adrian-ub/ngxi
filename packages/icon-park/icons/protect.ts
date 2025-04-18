import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkProtectIcon],svg[icon-park-protect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M6 9.25564L24.0086 4L42 9.25564V20.0337C42 31.3622 34.7502 41.4194 24.0026 45.0005C13.2521 41.4195 6 31.36 6 20.0287V9.25564Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M15 23L22 30L34 18"></svg:path></svg:g>`,
})
export class IconParkProtectIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
