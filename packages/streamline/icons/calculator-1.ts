import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCalculator1Icon],svg[streamline-calculator-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M11.5.5h-9a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1m-10 5h11"></svg:path><svg:path d="M4.25 8.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5M7 8.5A.25.25 0 0 1 7 8m0 .5A.25.25 0 0 0 7 8m2.75.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m-5.5 3a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5M7 11a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5m2.75.5a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5M10 3H9"></svg:path></svg:g>`,
})
export class StreamlineCalculator1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
