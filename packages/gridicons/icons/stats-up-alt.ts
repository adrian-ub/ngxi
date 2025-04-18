import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsStatsUpAltIcon],svg[gridicons-stats-up-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 21H3v-2h18zM8 10H4v7h4zm6-4h-4v11h4zm6-3h-4v14h4z"></svg:path>`,
})
export class GridiconsStatsUpAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
