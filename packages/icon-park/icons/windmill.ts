import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkWindmillIcon],svg[icon-park-windmill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" clip-rule="evenodd"><svg:path d="M24 23.9917L23.9707 13.9958L23.9415 4L12 14V24L24 23.9917Z"></svg:path><svg:path d="M24.0083 24L34.0042 23.9707L44 23.9415L34 12L24 12L24.0083 24Z"></svg:path><svg:path d="M24 24.0083L24.0293 34.0042L24.0585 44L36 34V24L24 24.0083Z"></svg:path><svg:path d="M23.9917 24L13.9958 24.0293L4 24.0585L14 36L24 36L23.9917 24Z"></svg:path></svg:g>`,
})
export class IconParkWindmillIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
