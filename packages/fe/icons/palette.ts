import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fePaletteIcon],svg[fe-palette-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.525 21.892a4 4 0 0 0-6.77-4.232A9.95 9.95 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10q-.752 0-1.475-.108M9 9a2 2 0 1 0 0-4a2 2 0 0 0 0 4m6 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4m3 5a2 2 0 1 0 0-4a2 2 0 0 0 0 4M6 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4m9 5a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class FePaletteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
