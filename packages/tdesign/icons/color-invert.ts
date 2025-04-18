import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignColorInvertIcon],svg[tdesign-color-invert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 1.586l6.01 6.01a8.5 8.5 0 0 1 1.906 9.114a7.5 7.5 0 0 1-1.918 2.92a8.5 8.5 0 0 1-2.63 1.784A8.503 8.503 0 0 1 5.99 7.595zm3.157 17.704c.453-.258.927-.612 1.451-1.1a6.5 6.5 0 0 0 1.445-2.21a6.7 6.7 0 0 0 .381-2.387c-.032-1.742-.695-3.44-1.838-4.583L13 5.414v14.542a5.5 5.5 0 0 0 1.548-.368q.31-.132.61-.298M11 5.414L7.404 9.01A6.5 6.5 0 0 0 11 20.03z"></svg:path>`,
})
export class TdesignColorInvertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
