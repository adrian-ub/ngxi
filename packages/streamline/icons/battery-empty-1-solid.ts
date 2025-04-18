import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBatteryEmpty1SolidIcon],svg[streamline-battery-empty-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 2A1.5 1.5 0 0 0 0 3.5v7A1.5 1.5 0 0 0 1.5 12h10a1.5 1.5 0 0 0 1.5-1.5v-1a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1v-1A1.5 1.5 0 0 0 11.5 2z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBatteryEmpty1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
