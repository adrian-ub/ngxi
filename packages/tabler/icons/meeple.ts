import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMeepleIcon],svg[tabler-meeple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20H4a1 1 0 0 1-1-1c0-2 3.378-4.907 4-6c-1 0-4-.5-4-2c0-2 4-3.5 6-4c0-1.5.5-4 3-4s3 2.5 3 4c2 .5 6 2 6 4c0 1.5-3 2-4 2c.622 1.093 4 4 4 6a1 1 0 0 1-1 1h-5c-1 0-2-4-3-4s-2 4-3 4"></svg:path>`,
})
export class TablerMeepleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
