import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBatteryEmpty2Icon],svg[streamline-battery-empty-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5 2.5h9a1 1 0 0 1 1 1V5h.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-.5v1.5a1 1 0 0 1-1 1M.5.5l13 13m-13-10v7a1 1 0 0 0 1 1h7"></svg:path>`,
})
export class StreamlineBatteryEmpty2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
