import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonLightning2FillIcon],svg[iconamoon-lightning-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.5 1a1 1 0 0 0-.96.72l-3.5 12A1 1 0 0 0 6 15h3.867l-.86 6.876a1 1 0 0 0 1.825.679l8-12A1 1 0 0 0 18 9h-3.557l2.493-6.649A1 1 0 0 0 16 1z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonLightning2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
