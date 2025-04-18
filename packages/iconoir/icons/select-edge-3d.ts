import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirSelectEdge3dIcon],svg[iconoir-select-edge-3d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 7.353v9.294a.6.6 0 0 1-.309.525l-8.4 4.666a.6.6 0 0 1-.582 0l-8.4-4.666A.6.6 0 0 1 3 16.647V7.353a.6.6 0 0 1 .309-.524l8.4-4.667a.6.6 0 0 1 .582 0l8.4 4.667a.6.6 0 0 1 .309.524M12 21v-9"></svg:path><svg:path fill="currentColor" d="M12.5 11v10a.5.5 0 0 1-1 0V11a.5.5 0 0 1 1 0"></svg:path></svg:g>`,
})
export class IconoirSelectEdge3dIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
