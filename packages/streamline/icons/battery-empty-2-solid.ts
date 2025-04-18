import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBatteryEmpty2SolidIcon],svg[streamline-battery-empty-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.219.219a.75.75 0 0 0 0 1.06l.178.179q.027.021.051.046l12.328 12.328a.75.75 0 0 0 1.005-1.112l-1.543-1.542a1 1 0 0 0 .262-.675v-1.5h.5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-.5v-1.5a1 1 0 0 0-1-1H3.564L1.28.22a.75.75 0 0 0-1.061 0ZM8.68 11.503L.514 3.337a1 1 0 0 0-.014.166v7a1 1 0 0 0 1 1z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBatteryEmpty2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
