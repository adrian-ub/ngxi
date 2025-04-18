import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFlipHorizontallyIcon],svg[icon-park-flip-horizontally-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M24 6V42"></svg:path><svg:path fill="#2F88FF" d="M4 34L16 12V34H4Z"></svg:path><svg:path fill="#2F88FF" d="M44 34H32V12L44 34Z"></svg:path></svg:g>`,
})
export class IconParkFlipHorizontallyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
