import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsNoMealsIcon],svg[material-symbols-no-meals-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.475 23.3L19 21.825V22h-2v-2.175L.675 3.5L2.1 2.075l19.8 19.8zM19 16.125l-2.075-2.075L14 11.125V7q0-2.075 1.463-3.537T19 2zm-7-7l-2-2V2h2zm-3-3l-2-2V2h2zm-3-3L4.875 2H6zM7 22v-9.15q-1.275-.35-2.137-1.4T4 9V3.975l2 2V9h1V6.975l2.025 2l2.25 2.275q-.4.575-.987.988T9 12.85V22z"></svg:path>`,
})
export class MaterialSymbolsNoMealsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
