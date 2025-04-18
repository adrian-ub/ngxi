import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTrackIcon],svg[tabler-track-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 15L15 4m5 5L9 20m-4-8l7 7M8.5 8.5l7 7M12 5l7 7"></svg:path>`,
})
export class TablerTrackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
