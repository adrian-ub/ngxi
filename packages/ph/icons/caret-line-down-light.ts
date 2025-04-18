import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCaretLineDownLightIcon],svg[ph-caret-line-down-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M43.76 76.24a6 6 0 0 1 8.48-8.48L128 143.51l75.76-75.75a6 6 0 0 1 8.48 8.48l-80 80a6 6 0 0 1-8.48 0ZM208 186H48a6 6 0 0 0 0 12h160a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhCaretLineDownLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
