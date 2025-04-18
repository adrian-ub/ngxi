import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerArrowDownRightCircleIcon],svg[tabler-arrow-down-right-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.464 8.464L18 18m-4 0h4v-4M8.414 8.414a2 2 0 1 0-2.828-2.828a2 2 0 0 0 2.828 2.828"></svg:path>`,
})
export class TablerArrowDownRightCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
