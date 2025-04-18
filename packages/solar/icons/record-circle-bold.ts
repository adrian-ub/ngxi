import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarRecordCircleBoldIcon],svg[solar-record-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.25 12a1.75 1.75 0 1 1 3.5 0a1.75 1.75 0 0 1-3.5 0M8 13.75a1.75 1.75 0 1 0 0-3.5a1.75 1.75 0 0 0 0 3.5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m1.26-8.25a3.25 3.25 0 1 1 2.74 1.5H8a3.25 3.25 0 1 1 2.74-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarRecordCircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
