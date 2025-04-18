import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerProtocolIcon],svg[tabler-protocol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 6L8 18M20 6l-7 12m-8-4v.015m0-4v.015"></svg:path>`,
})
export class TablerProtocolIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
