import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineDonutIcon],svg[streamline-donut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M.5 7a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M5 7a2 2 0 1 0 4 0a2 2 0 1 0-4 0m6.5-.5l-.5 1M3 9l1 1m4-7.5l1 1"></svg:path><svg:path d="M3.5 4.75a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m5 7a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5"></svg:path></svg:g>`,
})
export class StreamlineDonutIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
