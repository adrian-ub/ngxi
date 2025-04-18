import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerColorSwatchOffIcon],svg[tabler-color-swatch-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M13 13v4a4 4 0 0 0 6.832 2.825M21 17V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v4"></svg:path><svg:path d="m13 7.35l-2-2a2 2 0 0 0-2.11-.461M6.76 6.763L5.344 8.178a2 2 0 0 0 0 2.828l9 9"></svg:path><svg:path d="M7.3 13H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h12m0-4v.01M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerColorSwatchOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
