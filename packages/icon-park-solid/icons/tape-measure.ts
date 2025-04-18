import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTapeMeasureIcon],svg[icon-park-solid-tape-measure-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSTapeMeasure0"><svg:g fill="none" stroke-width="4"><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M13 15v-3a3 3 0 0 0-3-3v0a3 3 0 0 0-3 3v7"></svg:path><svg:path fill="#fff" stroke="#fff" stroke-linejoin="round" d="M4 27c0-6.627 5.373-12 12-12s12 5.373 12 12v12H4zm24 0h16v12H28z"></svg:path><svg:circle cx="16" cy="27" r="4" fill="#000" stroke="#000"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M39 27v4m-6-4v4"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M30 27h12"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSTapeMeasure0)"></svg:path>`,
})
export class IconParkSolidTapeMeasureIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
