import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonRoadIcon],svg[carbon-road-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 13h6v2h-6z"></svg:path><svg:path fill="currentColor" d="m25.44 8l-1.27-4.55A2.01 2.01 0 0 0 22.246 2H9.754a2.01 2.01 0 0 0-1.923 1.45L6.531 8H4v2h2v7a2.003 2.003 0 0 0 2 2v3h2v-3h12v3h2v-3a2.003 2.003 0 0 0 2-2v-7h2V8zM9.755 4h12.492l1.428 5H8.326zM24 13h-2v2h2v2H8v-2h2v-2H8v-2h16zM2 16h2v14H2zm26 0h2v14h-2z"></svg:path><svg:path fill="currentColor" d="M15 21h2v3h-2zm0 5h2v4h-2z"></svg:path>`,
})
export class CarbonRoadIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
