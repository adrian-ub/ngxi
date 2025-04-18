import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsObservationOutline24pxIcon],svg[healthicons-observation-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20 4.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m-2 0a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0M10.39 8L8.446 5.263a3 3 0 0 0-4.892 3.474L4 9.365V16H3v2h1.268a2 2 0 1 0 3.465 0h8.535a2 2 0 1 0 3.465 0H21v-2h-1v-2.764A3 3 0 0 0 18 8zm-2.065 4l-3.14-4.42a1 1 0 0 1 1.63-1.16L9.358 10H18a1 1 0 1 1 0 2zm-1.033 2H18v2H6v-3.82z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsObservationOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
