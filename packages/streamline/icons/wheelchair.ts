import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineWheelchairIcon],svg[streamline-wheelchair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4 13.5a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7"></svg:path><svg:path d="M4.2 6.51L3 .5H.5"></svg:path><svg:path d="M7.46 10.5h4.5l.267.976L10.78 6.17a2 2 0 0 0-2-1.67h-5m7.3 3.5H6.87m5.63 5.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path></svg:g>`,
})
export class StreamlineWheelchairIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
