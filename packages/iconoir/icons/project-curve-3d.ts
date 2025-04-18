import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirProjectCurve3dIcon],svg[iconoir-project-curve-3d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 21c-4.97 0-9-1.79-9-4s4.03-4 9-4s9 1.79 9 4s-4.03 4-9 4m0-19a3 3 0 0 1 3 3v1H9V5a3 3 0 0 1 3-3M3.5 15.5l4-7m13 7l-4-7"></svg:path>`,
})
export class IconoirProjectCurve3dIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
