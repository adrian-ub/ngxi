import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPrisonIcon],svg[tabler-prison-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 4v16M14 4v16M6 4v5m0 6v5m4-16v5m1 0H5v6h6zm-1 6v5m-2-8h-.01"></svg:path>`,
})
export class TablerPrisonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
