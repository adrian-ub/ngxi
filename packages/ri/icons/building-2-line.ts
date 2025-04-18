import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riBuilding2LineIcon],svg[ri-building-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19V5.7a1 1 0 0 1 .658-.94l9.671-3.516a.5.5 0 0 1 .671.47v4.953l6.316 2.105a1 1 0 0 1 .684.949V19h2v2H1v-2zm2 0h7V3.855L5 6.401zm14 0v-8.558l-5-1.667V19z"></svg:path>`,
})
export class RiBuilding2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
