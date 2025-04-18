import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSimIcon],svg[icon-park-sim-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M8 4H32.8889L40 11.2727V44H8V4Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M33 26H15V36H33V26Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M15 12V18"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M21 12V18"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M27 12V18"></svg:path></svg:g>`,
})
export class IconParkSimIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
