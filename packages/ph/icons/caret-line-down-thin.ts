import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCaretLineDownThinIcon],svg[ph-caret-line-down-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M45.17 74.83a4 4 0 0 1 5.66-5.66L128 146.34l77.17-77.17a4 4 0 1 1 5.66 5.66l-80 80a4 4 0 0 1-5.66 0ZM208 188H48a4 4 0 0 0 0 8h160a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhCaretLineDownThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
