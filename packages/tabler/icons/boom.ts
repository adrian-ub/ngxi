import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBoomIcon],svg[tabler-boom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9.662C5 12 5 14 3 16c3 .5 4.5 1 5 4c2-3 6-4 9 0c0-3 1-4 4-4.004Q18 13.001 21 10c-3 0-5-2-5-5c-2 4-5 3-7.5-1C8 7 6 9 3 9.662"></svg:path>`,
})
export class TablerBoomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
