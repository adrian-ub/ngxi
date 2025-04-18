import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCupLineIcon],svg[ri-cup-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 13V5H6v8a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2M5 3h15a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-2v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V4a1 1 0 0 1 1-1m13 2v3h2V5zM2 19h18v2H2z"></svg:path>`,
})
export class RiCupLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
