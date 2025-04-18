import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerAntennaBarsOffIcon],svg[tabler-antenna-bars-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18v-3m4 3v-6m4 6v-4m0-4V9m4 5V6M3 3l18 18"></svg:path>`,
})
export class TablerAntennaBarsOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
