import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMapOffIcon],svg[tabler-map-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.32 4.34L9 4l6 3l6-3v13m-2.67 1.335L15 20l-6-3l-6 3V7l2.665-1.333M9 4v1m0 4v8m6-10v4m0 4v5M3 3l18 18"></svg:path>`,
})
export class TablerMapOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
