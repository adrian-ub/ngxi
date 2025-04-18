import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiRayVertexIcon],svg[mdi-ray-vertex-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 11h7.17c.41-1.17 1.52-2 2.83-2s2.42.83 2.83 2H22v2h-7.17A2.99 2.99 0 0 1 12 15a2.99 2.99 0 0 1-2.83-2H2z"></svg:path>`,
})
export class MdiRayVertexIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
