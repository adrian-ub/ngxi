import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoCaretRightIcon],svg[fontisto-caret-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.4 24l12-12l-12-12z"></svg:path>`,
})
export class FontistoCaretRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
