import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsOptimizeIcon],svg[grommet-icons-optimize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M2 22h4v-4H2zM22 2L12 12m10-2V2h-8m8 11h-4v9h4zm-12 9h4v-6h-4z"></svg:path>`,
})
export class GrommetIconsOptimizeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
