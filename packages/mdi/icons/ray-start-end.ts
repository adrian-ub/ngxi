import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiRayStartEndIcon],svg[mdi-ray-start-end-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 9c1.31 0 2.42.83 2.83 2h10.34c.41-1.17 1.52-2 2.83-2a3 3 0 0 1 3 3a3 3 0 0 1-3 3a2.99 2.99 0 0 1-2.83-2H6.83A2.99 2.99 0 0 1 4 15a3 3 0 0 1-3-3a3 3 0 0 1 3-3"></svg:path>`,
})
export class MdiRayStartEndIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
