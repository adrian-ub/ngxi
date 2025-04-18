import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPencilUpIcon],svg[tabler-pencil-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 20h4L18.5 9.5a2.828 2.828 0 1 0-4-4L4 16zm9.5-13.5l4 4M19 22v-6m3 3l-3-3l-3 3"></svg:path>`,
})
export class TablerPencilUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
