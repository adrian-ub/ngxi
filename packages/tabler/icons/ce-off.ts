import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCeOffIcon],svg[tabler-ce-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.53 6.53A6.001 6.001 0 0 0 9 18M21 6a6 6 0 0 0-5.927 5.061L16 12m0 0h5M3 3l18 18"></svg:path>`,
})
export class TablerCeOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
