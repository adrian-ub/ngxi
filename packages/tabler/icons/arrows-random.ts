import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerArrowsRandomIcon],svg[tabler-arrows-random-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 21h-4v-4m0 4l5-5M6.5 9.504l-3.5-2L5 4M3 7.504l6.83-1.87M4 16l4-1l1 4m-1-4l-3.5 6M21 5l-.5 4l-4-.5m4 .5L16 3.5"></svg:path>`,
})
export class TablerArrowsRandomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
