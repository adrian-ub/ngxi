import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMatrixIcon],svg[tabler-matrix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16h.013m3.997 0h.005m4 0h.005m-.005-4h.005m-8.01 0h.005m3.995 0h.005m4.005-4h.005m-8.01 0h.005m3.995 0h.005M7 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h1M17 4h1a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-1"></svg:path>`,
})
export class TablerMatrixIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
