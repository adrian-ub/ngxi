import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineSleepIcon],svg[streamline-sleep-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.588 4.403H5.24L2.422 8.38h2.983M7.825.94h2.483L7.67 4.664h2.793M8.402 7.712h3.612l-3.838 5.419h4.064"></svg:path>`,
})
export class StreamlineSleepIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
