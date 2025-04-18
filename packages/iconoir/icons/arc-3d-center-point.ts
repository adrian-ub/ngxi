import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirArc3dCenterPointIcon],svg[iconoir-arc-3d-center-point-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path stroke-dasharray="3 3" d="M22 16c0-5.523-4.477-10-10-10c-4.1 0-7.625 2.468-9.168 6"></svg:path><svg:path fill="currentColor" d="M2 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path d="M2 16h10"></svg:path><svg:path fill="currentColor" d="M12 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path></svg:g>`,
})
export class IconoirArc3dCenterPointIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
