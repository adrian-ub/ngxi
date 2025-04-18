import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerChecksIcon],svg[tabler-checks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 12l5 5L22 7M2 12l5 5m5-5l5-5"></svg:path>`,
})
export class TablerChecksIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
