import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerRectangleRoundedBottomIcon],svg[tabler-rectangle-rounded-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 18h6a6 6 0 0 0 6-6V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v5a6 6 0 0 0 6 6"></svg:path>`,
})
export class TablerRectangleRoundedBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
