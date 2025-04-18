import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoCaretLeftIcon],svg[fontisto-caret-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.4 0l-12 12l12 12z"></svg:path>`,
})
export class FontistoCaretLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
