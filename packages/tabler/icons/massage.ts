import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMassageIcon],svg[tabler-massage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 17a1 1 0 1 0 2 0a1 1 0 1 0-2 0M8 5a1 1 0 1 0 2 0a1 1 0 1 0-2 0M4 22l4-2v-3h12m-9 3h9M8 14l3-2l1-4c3 1 3 4 3 6"></svg:path>`,
})
export class TablerMassageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
