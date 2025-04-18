import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMaslowPyramidsIcon],svg[icon-park-maslow-pyramids-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" stroke-linejoin="round" d="M24 4L15 19.9803H33L24 4Z" clip-rule="evenodd"></svg:path><svg:path stroke-linecap="round" d="M24 19.9805L24.0083 44.0001"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M11.3466 25.9746L1.99998 42.0001H17.0045"></svg:path><svg:path stroke-linecap="round" d="M9.10008 30.9951H17.0044"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M36.7477 25.9746L46.0943 42.0001H31"></svg:path><svg:path stroke-linecap="round" d="M39.0943 30.9951H31.1002"></svg:path></svg:g>`,
})
export class IconParkMaslowPyramidsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
