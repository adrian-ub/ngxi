import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirCylinderIcon],svg[iconoir-cylinder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M12 2c8 0 8 3 8 3s0 3-8 3s-8-3-8-3s0-3 8-3Zm0 14c8 0 8 3 8 3s0 3-8 3s-8-3-8-3s0-3 8-3Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M20 5v14M4 5v14"></svg:path></svg:g>`,
})
export class IconoirCylinderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
