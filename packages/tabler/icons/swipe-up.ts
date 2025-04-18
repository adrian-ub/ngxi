import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSwipeUpIcon],svg[tabler-swipe-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16a4 4 0 1 0 8 0a4 4 0 1 0-8 0m4-4V4M9 7l3-3l3 3"></svg:path>`,
})
export class TablerSwipeUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
