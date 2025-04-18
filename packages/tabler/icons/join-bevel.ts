import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerJoinBevelIcon],svg[tabler-join-bevel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 4h3a2 2 0 0 1 2 2v6a1 1 0 0 0 1 1h6a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-6.586a1 1 0 0 1-.707-.293l-6.414-6.414A1 1 0 0 1 4 12.586V6a2 2 0 0 1 2-2"></svg:path>`,
})
export class TablerJoinBevelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
