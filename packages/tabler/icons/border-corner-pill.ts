import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBorderCornerPillIcon],svg[tabler-border-corner-pill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 20v-5C4 8.925 8.925 4 15 4h5"></svg:path>`,
})
export class TablerBorderCornerPillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
