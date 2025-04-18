import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBetaIcon],svg[tabler-beta-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 22V8a4 4 0 0 1 4-4h.5a3.5 3.5 0 0 1 0 7H12h.5A4.5 4.5 0 1 1 8 15.5V15"></svg:path>`,
})
export class TablerBetaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
