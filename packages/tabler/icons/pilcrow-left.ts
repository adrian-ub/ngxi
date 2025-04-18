import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPilcrowLeftIcon],svg[tabler-pilcrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 9H9a3 3 0 1 1 0-6h7m-5 0v11m4-11v11M3 18h18M6 15l-3 3l3 3"></svg:path>`,
})
export class TablerPilcrowLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
