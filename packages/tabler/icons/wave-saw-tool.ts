import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerWaveSawToolIcon],svg[tabler-wave-saw-tool-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12h5l4 8V4l4 8h5"></svg:path>`,
})
export class TablerWaveSawToolIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
