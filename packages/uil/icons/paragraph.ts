import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilParagraphIcon],svg[uil-paragraph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 13.5H3a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2m8-5H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2"></svg:path>`,
})
export class UilParagraphIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
