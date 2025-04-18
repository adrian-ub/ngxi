import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirBridge3dIcon],svg[iconoir-bridge-3d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M18 4h3"></svg:path><svg:path fill="currentColor" d="M10 21a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4-16a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path d="M10 20s6.5-2.5 2-8s2-8 2-8M3 20h3"></svg:path></svg:g>`,
})
export class IconoirBridge3dIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
