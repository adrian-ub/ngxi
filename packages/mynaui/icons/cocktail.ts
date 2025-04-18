import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiCocktailIcon],svg[mynaui-cocktail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12 14.25l7.777-9.625C20.306 3.97 19.835 3 18.988 3H5.012c-.847 0-1.318.97-.789 1.625zm0 0V21M6.546 7.5h10.908M7.329 21h9.342"></svg:path>`,
})
export class MynauiCocktailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
