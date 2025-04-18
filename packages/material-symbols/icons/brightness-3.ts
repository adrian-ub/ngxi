import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBrightness3Icon],svg[material-symbols-brightness-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 22q-.8 0-1.537-.112T6 21.55q3.15-1.025 5.075-3.65T13 12t-1.925-5.9T6 2.45q.725-.225 1.463-.337T9 2q2.075 0 3.9.788t3.175 2.137T18.213 8.1T19 12t-.788 3.9t-2.137 3.175t-3.175 2.138T9 22"></svg:path>`,
})
export class MaterialSymbolsBrightness3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
