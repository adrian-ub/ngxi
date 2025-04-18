import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsFemale24pxIcon],svg[healthicons-female-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 8.75a7 7 0 1 1 8 6.93v1.82h2.25a1 1 0 1 1 0 2H13v1.75a1 1 0 1 1-2 0V19.5H8.75a1 1 0 1 1 0-2H11v-1.82a7 7 0 0 1-6-6.93m7-5a5 5 0 1 0 0 10a5 5 0 0 0 0-10" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsFemale24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
