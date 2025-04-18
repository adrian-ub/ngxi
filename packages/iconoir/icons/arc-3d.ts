import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirArc3dIcon],svg[iconoir-arc-3d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M22 16c0-5.523-4.477-10-10-10S2 10.477 2 16"></svg:path><svg:path fill="currentColor" d="M2 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2m20 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path></svg:g>`,
})
export class IconoirArc3dIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
