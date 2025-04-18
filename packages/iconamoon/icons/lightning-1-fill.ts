import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonLightning1FillIcon],svg[iconamoon-lightning-1-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 2a1 1 0 0 0-1.864-.504l-7 12A1 1 0 0 0 6 15h4v7a1 1 0 0 0 1.864.504l7-12A1 1 0 0 0 18 9h-4z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonLightning1FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
