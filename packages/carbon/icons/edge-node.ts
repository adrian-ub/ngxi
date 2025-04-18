import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonEdgeNodeIcon],svg[carbon-edge-node-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 6h4v4h-4z"></svg:path><svg:circle cx="7" cy="7" r="1" fill="currentColor"></svg:circle><svg:circle cx="25" cy="25" r="1" fill="currentColor"></svg:circle><svg:circle cx="25" cy="21" r="1" fill="currentColor"></svg:circle><svg:circle cx="25" cy="17" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M22 17v-2h-2v-1a2 2 0 0 0-2-2h-1v-2h-2v2h-2v-2h-2v2h-1a2 2 0 0 0-2 2v1H6v2h2v2H6v2h2v1a2 2 0 0 0 2 2h1v2h2v-2h2v2h2v-2h1a2 2 0 0 0 2-2v-1h2v-2h-2v-2Zm-4 5h-8v-8h8Z"></svg:path><svg:path fill="currentColor" d="M28 30H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2M4 4v24h24V4Z"></svg:path>`,
})
export class CarbonEdgeNodeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
