import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerHexagon3dIcon],svg[tabler-hexagon-3d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19 6.844a2.01 2.01 0 0 1 1 1.752v6.555c0 .728-.394 1.399-1.03 1.753l-6 3.844a2 2 0 0 1-1.942 0l-6-3.844a2.01 2.01 0 0 1-1.029-1.752V8.596c0-.729.394-1.4 1.029-1.753l6-3.583a2.05 2.05 0 0 1 2 0l6 3.584h-.03zM12 16.5V21M4.5 7.5L8 10m8 0l4-2.5"></svg:path><svg:path d="M12 7.5V12l-4 2m4-2l4 2"></svg:path><svg:path d="m12 16.5l4-2.5v-4l-4-2.5L8 10v4z"></svg:path></svg:g>`,
})
export class TablerHexagon3dIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
