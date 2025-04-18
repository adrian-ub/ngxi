import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerInfinityOffIcon],svg[tabler-infinity-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.165 8.174A4 4 0 0 0 2.999 12a4 4 0 0 0 6.829 2.828A10 10 0 0 0 12 12m1.677-2.347a10 10 0 0 1 .495-.481a4 4 0 1 1 5.129 6.1m-3.521.537a4 4 0 0 1-1.608-.981A10 10 0 0 1 12 12M3 3l18 18"></svg:path>`,
})
export class TablerInfinityOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
