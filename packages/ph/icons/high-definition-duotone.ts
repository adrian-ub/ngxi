import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phHighDefinitionDuotoneIcon],svg[ph-high-definition-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 48v160H32V48Z" opacity=".2"></svg:path><svg:path d="M176 72h-24a8 8 0 0 0-8 8v96a8 8 0 0 0 8 8h24a56 56 0 0 0 0-112m0 96h-16V88h16a40 40 0 0 1 0 80m-64 8v-40H56v40a8 8 0 0 1-16 0V80a8 8 0 0 1 16 0v40h56V80a8 8 0 0 1 16 0v96a8 8 0 0 1-16 0M24 48a8 8 0 0 1 8-8h192a8 8 0 0 1 0 16H32a8 8 0 0 1-8-8m208 160a8 8 0 0 1-8 8H32a8 8 0 0 1 0-16h192a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhHighDefinitionDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
