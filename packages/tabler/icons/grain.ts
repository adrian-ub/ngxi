import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerGrainIcon],svg[tabler-grain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.5 9.5a1 1 0 1 0 2 0a1 1 0 1 0-2 0m5-5a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0 10a1 1 0 1 0 2 0a1 1 0 1 0-2 0m-5 5a1 1 0 1 0 2 0a1 1 0 1 0-2 0m10-10a1 1 0 1 0 2 0a1 1 0 1 0-2 0m5-5a1 1 0 1 0 2 0a1 1 0 1 0-2 0m-5 15a1 1 0 1 0 2 0a1 1 0 1 0-2 0m5-5a1 1 0 1 0 2 0a1 1 0 1 0-2 0"></svg:path>`,
})
export class TablerGrainIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
