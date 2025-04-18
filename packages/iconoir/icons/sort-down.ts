import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirSortDownIcon],svg[iconoir-sort-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 10H2m8 4H2m4 4H2M18 6H2m17 4v10m0 0l3-3m-3 3l-3-3"></svg:path>`,
})
export class IconoirSortDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
