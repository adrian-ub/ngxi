import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faColumnsIcon],svg[fa-columns-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 1408h608V256H128v1120q0 13 9.5 22.5t22.5 9.5m1376-32V256H896v1152h608q13 0 22.5-9.5t9.5-22.5m128-1216v1216q0 66-47 113t-113 47H160q-66 0-113-47T0 1376V160Q0 94 47 47T160 0h1344q66 0 113 47t47 113"></svg:path>`,
})
export class FaColumnsIcon {
  readonly viewBox = input("0 0 1664 1536")
  readonly width = input("1.09em")
  readonly height = input("1em")
}
