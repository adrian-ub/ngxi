import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTapeMeasureIcon],svg[icon-park-tape-measure-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M13 15V12C13 10.3431 11.6569 9 10 9V9C8.34315 9 7 10.3431 7 12V19"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M4 27C4 20.3726 9.37258 15 16 15C22.6274 15 28 20.3726 28 27V39H4V27Z"></svg:path><svg:rect width="16" height="12" x="28" y="27" fill="#2F88FF" stroke="#000" stroke-linejoin="round"></svg:rect><svg:circle cx="16" cy="27" r="4" fill="#43CCF8" stroke="#fff"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M39 27L39 31"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M33 27L33 31"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M30 27H42"></svg:path></svg:g>`,
})
export class IconParkTapeMeasureIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
