import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPilcrowRightIcon],svg[tabler-pilcrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 9H9a3 3 0 1 1 0-6h7m-5 0v11m4-11v11m6 4H3m15-3l3 3l-3 3"></svg:path>`,
})
export class TablerPilcrowRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
