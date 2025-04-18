import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilProgrammingLanguageIcon],svg[uil-programming-language-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22 3l-3 15.1l-9.1 3l-7.9-3l.8-4.1h3.4l-.4 1.7l4.8 1.8l5.5-1.8l.8-3.8H3.2l.7-3.4h13.6l.5-2.1H4.3L5 3z"></svg:path>`,
})
export class UilProgrammingLanguageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
