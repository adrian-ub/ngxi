import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineGraphBarDecreaseIcon],svg[streamline-graph-bar-decrease-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m1.24.5l11.5 5.23m-2.15.81l2.15-.81l-.8-2.16M1.25 6h1.5a.5.5 0 0 1 .5.5v7H.75v-7a.5.5 0 0 1 .5-.5m5 1.5h1.5a.5.5 0 0 1 .5.5v5.5h-2.5V8a.5.5 0 0 1 .5-.5m5 1.5h1.5a.5.5 0 0 1 .5.5v4h-2.5v-4a.5.5 0 0 1 .5-.5"></svg:path>`,
})
export class StreamlineGraphBarDecreaseIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
