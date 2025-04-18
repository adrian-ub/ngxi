import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerFlipHorizontalIcon],svg[tabler-flip-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12h18M7 16h10L7 21zm0-8h10L7 3z"></svg:path>`,
})
export class TablerFlipHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
