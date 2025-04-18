import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsPavedRoadAltOutlineIcon],svg[healthicons-paved-road-alt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M33 7a1 1 0 0 1 2 0v34a1 1 0 1 1-2 0zM13 7a1 1 0 0 1 2 0v34a1 1 0 1 1-2 0zm10 4a1 1 0 0 1 2 0v4a1 1 0 1 1-2 0zm0 11a1 1 0 0 1 2 0v4a1 1 0 1 1-2 0zm0 11a1 1 0 0 1 2 0v4a1 1 0 1 1-2 0z"></svg:path>`,
})
export class HealthiconsPavedRoadAltOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
