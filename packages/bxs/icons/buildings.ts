import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsBuildingsIcon],svg[bxs-buildings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 14.001h2v2H7z"></svg:path><svg:path fill="currentColor" d="M19 2h-8a2 2 0 0 0-2 2v6H5c-1.103 0-2 .897-2 2v9a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2M5 20v-8h6v8zm9-12h-2V6h2zm4 8h-2v-2h2zm0-4h-2v-2h2zm0-4h-2V6h2z"></svg:path>`,
})
export class BxsBuildingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
