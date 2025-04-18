import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPackage2SharpIcon],svg[material-symbols-package-2-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 21.725v-9.15L3 7.95v9.175zm2 0l8-4.6V7.95l-8 4.625zm3.975-13.75l2.95-1.725L12 1.7L9.025 3.4zM12 10.85l2.975-1.7l-7.925-4.6l-3 1.725z"></svg:path>`,
})
export class MaterialSymbolsPackage2SharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
