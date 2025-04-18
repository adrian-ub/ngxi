import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSquareToggleHorizontalIcon],svg[tabler-square-toggle-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M22 12H2m2 2V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8m-2 6a2 2 0 0 0 2-2M4 18a2 2 0 0 0 2 2m8 0h-4"></svg:path>`,
})
export class TablerSquareToggleHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
