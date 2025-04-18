import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSleighIcon],svg[tabler-sleigh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 19h15a4 4 0 0 0 4-4m-6 0H7a4 4 0 0 1-4-4V5l1.243 1.243A6 6 0 0 0 8.485 8H12v2a2 2 0 0 0 2 2h.5a1.5 1.5 0 0 0 1.5-1.5a1.5 1.5 0 0 1 3 0V12a3 3 0 0 1-3 3m-1 0v4m-8-4v4"></svg:path>`,
})
export class TablerSleighIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
