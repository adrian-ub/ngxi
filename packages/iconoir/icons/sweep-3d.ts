import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirSweep3dIcon],svg[iconoir-sweep-3d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m3 22l5.5-5.5M20 5l-2.5 2.5M7 21h8.5l-7-12l-5.833 10M14.5 3l7 12m-13-6l6-6m1 18l6-6"></svg:path>`,
})
export class IconoirSweep3dIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
