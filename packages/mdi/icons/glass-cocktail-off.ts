import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiGlassCocktailOffIcon],svg[mdi-glass-cocktail-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.33 12.67L7.66 7L6.13 5.47L2.39 1.73L1.11 3L3 4.89V5l8 8v6H6v2h12v-1.11l2.84 2.84l1.27-1.27zM13 19v-4.11L17.11 19zM8.2 5l-2-2H21v2l-6.4 6.4L10.2 7h6.3l2-2z"></svg:path>`,
})
export class MdiGlassCocktailOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
