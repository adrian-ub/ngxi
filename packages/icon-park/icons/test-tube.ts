import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTestTubeIcon],svg[icon-park-test-tube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#000" d="M18 4H30"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" stroke="#000" d="M24 44C27.3137 44 30 41.3137 30 38V10H18V38C18 41.3137 20.6863 44 24 44Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" d="M24 27V28"></svg:path><svg:path stroke="#fff" d="M24 18V21"></svg:path><svg:path stroke="#000" d="M19 35H30"></svg:path></svg:g>`,
})
export class IconParkTestTubeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
