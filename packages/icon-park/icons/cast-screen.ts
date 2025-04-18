import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCastScreenIcon],svg[icon-park-cast-screen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M21 39C21 30.1634 13.8366 23 5 23"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M13 39C13 34.5817 9.41828 31 5 31"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M5.5 41C6.88071 41 8 39.8807 8 38.5C8 37.1193 6.88071 36 5.5 36C4.11929 36 3 37.1193 3 38.5C3 39.8807 4.11929 41 5.5 41Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 16.0566V8H44V40H28.7712"></svg:path></svg:g>`,
})
export class IconParkCastScreenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
