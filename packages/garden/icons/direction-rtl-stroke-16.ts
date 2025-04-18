import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenDirectionRtlStroke16Icon],svg[garden-direction-rtl-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M3.5 15.5L.9 12.9c-.2-.2-.2-.5 0-.7l2.6-2.6m6 .9V.5H11c.3 0 .5.2.5.5v9.5M9 .5C7.1.5 5.5 2.1 5.5 4S7.1 7.5 9 7.5m-7.5 5h14"></svg:path>`,
})
export class GardenDirectionRtlStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
