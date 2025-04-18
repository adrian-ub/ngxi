import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMicrowaveIcon],svg[streamline-microwave-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13 2.5H1a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5"></svg:path><svg:path d="M8.5 4.5H3a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h5.5A.5.5 0 0 0 9 9V5a.5.5 0 0 0-.5-.5M11 5h.5M11 7h.5"></svg:path></svg:g>`,
})
export class StreamlineMicrowaveIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
