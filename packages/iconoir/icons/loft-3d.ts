import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirLoft3dIcon],svg[iconoir-loft-3d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 17c-9 0-11 6-20 6M22 1C13 1 11 7 2 7m10 9.5v-9m0 9l2.5-2.5M12 16.5L9.5 14M12 7.5l2.5 2.5M12 7.5L9.5 10"></svg:path>`,
})
export class IconoirLoft3dIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
