import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirFillet3dIcon],svg[iconoir-fillet-3d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M2 20v-4C2 8.268 8.268 2 16 2h4m.839 18.84h-3.536m3.536 0v-3.536m0 3.535L18 18"></svg:path><svg:path stroke-dasharray="2 3" d="m9 9l7 7"></svg:path></svg:g>`,
})
export class IconoirFillet3dIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
