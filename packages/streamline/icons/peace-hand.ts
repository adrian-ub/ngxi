import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlinePeaceHandIcon],svg[streamline-peace-hand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10.21 13.5c1.464-1.429 1.563-3.26 1.743-4.356c.31-1.89-1.743-2.666-4.014-3.106l.291-4.223a1.14 1.14 0 0 0-2.268-.21l-.474 3.984l-1.043-3.788A1.307 1.307 0 0 0 2.893.882A1.21 1.21 0 0 0 2 2.38l1.45 5.44"></svg:path><svg:path d="M3.885 13.5C1.91 12.712 1.6 10.71 1.69 9.313c.057-.879.855-1.491 1.736-1.491h3.191a1.043 1.043 0 0 1 .244 2.057l-1.807.434c.57-.094 1.87.48 1.917 1.734"></svg:path></svg:g>`,
})
export class StreamlinePeaceHandIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
