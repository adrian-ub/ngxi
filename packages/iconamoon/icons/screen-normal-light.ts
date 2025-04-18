import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonScreenNormalLightIcon],svg[iconamoon-screen-normal-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 4v3a2 2 0 0 1-2 2H4m11 11v-3a2 2 0 0 1 2-2h3m0-6h-3a2 2 0 0 1-2-2V4M4 15h3a2 2 0 0 1 2 2v3"></svg:path>`,
})
export class IconamoonScreenNormalLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
