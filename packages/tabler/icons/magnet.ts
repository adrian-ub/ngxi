import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMagnetIcon],svg[tabler-magnet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 13V5a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v8a2 2 0 0 0 6 0V5a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v8a8 8 0 0 1-16 0m0-5h5m6 0h4"></svg:path>`,
})
export class TablerMagnetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
