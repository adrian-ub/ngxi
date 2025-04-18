import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFormula1Icon],svg[arcticons-formula-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M44.5 18.306h-5.922L27.189 29.694h5.922z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.578 18.306h-20.79a7 7 0 0 0-4.95 2.05L3.5 29.694h5.922l6.568-6.567a3.5 3.5 0 0 1 2.475-1.025h16.317"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.422 29.694h5.922l3.357-3.356a1.5 1.5 0 0 1 1.061-.44h11.223"></svg:path>`,
})
export class ArcticonsFormula1Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
