import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCornerUpRightIcon],svg[tabler-corner-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18v-6a3 3 0 0 1 3-3h10l-4-4m0 8l4-4"></svg:path>`,
})
export class TablerCornerUpRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
