import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerIceSkatingIcon],svg[tabler-ice-skating-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.905 5h3.418a1 1 0 0 1 .928.629l1.143 2.856a3 3 0 0 0 2.207 1.83l4.717.926A2.084 2.084 0 0 1 20 13.286V14a1 1 0 0 1-1 1H5.105a1 1 0 0 1-1-1.1l.8-8a1 1 0 0 1 1-.9M3 19h17a1 1 0 0 0 1-1M9 15v4m6-4v4"></svg:path>`,
})
export class TablerIceSkatingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
