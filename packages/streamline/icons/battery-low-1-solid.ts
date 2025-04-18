import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBatteryLow1SolidIcon],svg[streamline-battery-low-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.44 2.44A1.5 1.5 0 0 1 1.5 2h10A1.5 1.5 0 0 1 13 3.5v1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1v1a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 0 10.5v-7c0-.398.158-.78.44-1.06M3.374 5a.625.625 0 1 0-1.25 0v4a.625.625 0 1 0 1.25 0z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBatteryLow1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
