import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSwitchIcon],svg[tabler-switch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 4h4v4m-4.25 1.25L19 4M5 19l4-4m6 4h4v-4M5 5l14 14"></svg:path>`,
})
export class TablerSwitchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
