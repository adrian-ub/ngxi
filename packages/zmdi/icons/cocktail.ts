import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiCocktailIcon],svg[zmdi-cocktail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M171 213L0 43V0h384v43L213 213v128h107v43H64v-43h107zM96 85h192l43-42H53z"></svg:path>`,
})
export class ZmdiCocktailIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}
