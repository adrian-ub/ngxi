import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineSyringeIcon],svg[streamline-syringe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 3L2.42 7.49a2 2 0 0 0 0 2.83l1.26 1.26a2 2 0 0 0 2.83 0L11 7M10.5.5l3 3M9 5l3-3m-8.95 8.95L.5 13.5m5-12l7 7"></svg:path>`,
})
export class StreamlineSyringeIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
