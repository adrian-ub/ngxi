import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCuvetteIcon],svg[icon-park-cuvette-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" stroke="#000" d="M18 10H30V27L44 41V44H4V41L18 27V10Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" d="M40.5 37.5L37 34L33.5 30.5"></svg:path><svg:path stroke="#000" d="M40.5 37.5L37 34L33.5 30.5"></svg:path><svg:path stroke="#000" d="M14.5 30.5L11 34L7.5 37.5"></svg:path><svg:path stroke="#000" d="M14.5 30.5L11 34L7.5 37.5"></svg:path><svg:path stroke="#000" d="M18 4H30"></svg:path><svg:path stroke="#fff" d="M24 27V28"></svg:path><svg:path stroke="#fff" d="M24 18V21"></svg:path><svg:path stroke="#000" d="M10 35H38"></svg:path></svg:g>`,
})
export class IconParkCuvetteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
