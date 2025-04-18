import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsWheelchairAlt24pxIcon],svg[healthicons-wheelchair-alt-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5h2.52l1.199 5.754A5.5 5.5 0 1 0 14.793 14h2.14v5.5a1.5 1.5 0 0 0 1.5 1.5H19a1 1 0 1 0 0-2h-.067v-5a2 2 0 0 0-2-2h-3.19a5.49 5.49 0 0 0-5.124-1.93L8.396 9H16a1 1 0 1 0 0-2H8v.097L7.146 3H3z"></svg:path>`,
})
export class HealthiconsWheelchairAlt24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
