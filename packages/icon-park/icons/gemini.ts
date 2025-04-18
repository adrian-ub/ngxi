import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkGeminiIcon],svg[icon-park-gemini-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 6C4 6 15.5878 14 24 14C32.4122 14 44 6 44 6"></svg:path><svg:path d="M4 42C4 42 15.5878 34 24 34C32.4122 34 44 42 44 42"></svg:path><svg:path d="M15 12V36"></svg:path><svg:path d="M33 12V36"></svg:path></svg:g>`,
})
export class IconParkGeminiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
