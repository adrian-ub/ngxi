import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsPavedRoadAltOutline24pxIcon],svg[healthicons-paved-road-alt-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 1.75a1 1 0 0 1 1 1v18.5a1 1 0 1 1-2 0V2.75a1 1 0 0 1 1-1m10 0a1 1 0 0 1 1 1v18.5a1 1 0 1 1-2 0V2.75a1 1 0 0 1 1-1M13 5a1 1 0 1 0-2 0v2.5a1 1 0 1 0 2 0zm-1 10.25a1 1 0 0 1 1 1v2.5a1 1 0 1 1-2 0v-2.5a1 1 0 0 1 1-1m1-4.5a1 1 0 1 0-2 0v2.5a1 1 0 1 0 2 0z"></svg:path>`,
})
export class HealthiconsPavedRoadAltOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
