import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phDresserDuotoneIcon],svg[ph-dresser-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 40v176a8 8 0 0 1-8 8H56a8 8 0 0 1-8-8V40a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M144 192a8 8 0 0 1-8 8h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 8 8M120 72h16a8 8 0 0 0 0-16h-16a8 8 0 0 0 0 16m16 48h-16a8 8 0 0 0 0 16h16a8 8 0 0 0 0-16m80-80v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16M56 152h144v-48H56Zm0-112v48h144V40Zm144 176v-48H56v48z"></svg:path></svg:g>`,
})
export class PhDresserDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
