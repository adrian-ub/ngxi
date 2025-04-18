import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBracesCircleIcon],svg[streamline-braces-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.5 4.5c-.39 0-1.083.304-1.133 1.148c-.03.497-.198 1.017-.643 1.24L3.5 7l.224.112c.445.223.613.743.643 1.24c.05.844.743 1.148 1.133 1.148m3-5c.39 0 1.083.304 1.133 1.148c.03.497.198 1.017.643 1.24L10.5 7l-.224.112c-.445.223-.613.743-.643 1.24A1.174 1.174 0 0 1 8.5 9.5"></svg:path><svg:path d="M7 13.25A6.25 6.25 0 1 0 7 .75a6.25 6.25 0 0 0 0 12.5"></svg:path></svg:g>`,
})
export class StreamlineBracesCircleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
