import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonListBoxesIcon],svg[carbon-list-boxes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 8h14v2H16zm0 14h14v2H16zm-6-8H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2M4 6v6h6.001L10 6zm6 22H4a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2m-6-8v6h6.001L10 20z"></svg:path>`,
})
export class CarbonListBoxesIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
