import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerOmegaIcon],svg[tabler-omega-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 19h5v-1a7.35 7.35 0 1 1 6 0v1h5"></svg:path>`,
})
export class TablerOmegaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
