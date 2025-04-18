import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCellIcon],svg[tabler-cell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 4L4 6v5l4 2l4-2V6zm4 7l4 2l4-2V6l-4-2l-4 2m-4 7v5l4 2l4-2v-5"></svg:path>`,
})
export class TablerCellIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
