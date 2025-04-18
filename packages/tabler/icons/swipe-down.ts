import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSwipeDownIcon],svg[tabler-swipe-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4a4 4 0 1 1 0 8a4 4 0 0 1 0-8m0 8v8m-3-3l3 3l3-3"></svg:path>`,
})
export class TablerSwipeDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
