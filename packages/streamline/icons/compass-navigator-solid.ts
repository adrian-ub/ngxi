import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCompassNavigatorSolidIcon],svg[streamline-compass-navigator-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.295 1.065a1.209 1.209 0 0 1 1.49 1.49l-2.092 7.45a1.21 1.21 0 0 1-.837.837l-7.45 2.093a1.209 1.209 0 0 1-1.49-1.49l2.092-7.45c.114-.406.431-.723.837-.837zM8.488 5.512a2.104 2.104 0 1 0-2.976 2.976a2.104 2.104 0 0 0 2.976-2.976" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineCompassNavigatorSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
