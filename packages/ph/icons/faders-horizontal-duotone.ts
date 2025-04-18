import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFadersHorizontalDuotoneIcon],svg[ph-faders-horizontal-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 80v96H40V80Z" opacity=".2"></svg:path><svg:path d="M176 80a8 8 0 0 1 8-8h32a8 8 0 0 1 0 16h-32a8 8 0 0 1-8-8M40 88h104v16a8 8 0 0 0 16 0V56a8 8 0 0 0-16 0v16H40a8 8 0 0 0 0 16m176 80h-96a8 8 0 0 0 0 16h96a8 8 0 0 0 0-16M88 144a8 8 0 0 0-8 8v16H40a8 8 0 0 0 0 16h40v16a8 8 0 0 0 16 0v-48a8 8 0 0 0-8-8"></svg:path></svg:g>`,
})
export class PhFadersHorizontalDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
