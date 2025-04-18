import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[miCaretLeftIcon],svg[mi-caret-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14 17l-6-5l6-5z"></svg:path>`,
})
export class MiCaretLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
