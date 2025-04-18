import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerRubberStampIcon],svg[tabler-rubber-stamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 17.85H3c0-4.05 1.421-4.05 3.79-4.05C12 13.8 8 9.21 8 7a4 4 0 1 1 8 0c0 2.21-4 6.8 1.21 6.8c2.369 0 3.79 0 3.79 4.05M5 21h14"></svg:path>`,
})
export class TablerRubberStampIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
