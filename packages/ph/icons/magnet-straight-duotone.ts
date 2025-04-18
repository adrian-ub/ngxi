import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phMagnetStraightDuotoneIcon],svg[ph-magnet-straight-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M104 56v40H48V56a8 8 0 0 1 8-8h40a8 8 0 0 1 8 8m96-8h-40a8 8 0 0 0-8 8v40h56V56a8 8 0 0 0-8-8" opacity=".2"></svg:path><svg:path d="M200 40h-40a16 16 0 0 0-16 16v88a16 16 0 0 1-32 0V56a16 16 0 0 0-16-16H56a16 16 0 0 0-16 16v88a88 88 0 0 0 88 88h.67c48.15-.36 87.33-40.29 87.33-89V56a16 16 0 0 0-16-16m0 16v32h-40V56ZM96 56v32H56V56Zm32.55 160A72 72 0 0 1 56 144v-40h40v40a32 32 0 0 0 64 0v-40h40v39c0 40-32 72.71-71.45 73"></svg:path></svg:g>`,
})
export class PhMagnetStraightDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
