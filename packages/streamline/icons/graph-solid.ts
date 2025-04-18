import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineGraphSolidIcon],svg[streamline-graph-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.574.898a.75.75 0 0 0-1.5 0v12.204c0 .414.336.75.75.75h12.204a.75.75 0 1 0 0-1.5H1.573zm8.647 1.533a1 1 0 0 0-1.413.26L5.73 7.307L4.246 5.823A1 1 0 1 0 2.83 7.238l2.347 2.346a1 1 0 0 0 1.54-.152l3.181-4.773l2.446 1.747a1 1 0 0 0 1.162-1.628z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineGraphSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
