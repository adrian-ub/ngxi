import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBreadIcon],svg[tabler-bread-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 4a3 3 0 0 1 2 5.235V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9.236a3 3 0 0 1 1.824-5.231H18z"></svg:path>`,
})
export class TablerBreadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
