import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineDivisionCircleIcon],svg[streamline-division-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 13.25A6.25 6.25 0 1 0 7 .75a6.25 6.25 0 0 0 0 12.5M4.044 7.006h5.977"></svg:path><svg:path d="M7 4.386a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m0 6.239a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5"></svg:path></svg:g>`,
})
export class StreamlineDivisionCircleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
