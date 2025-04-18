import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCocktailSolidIcon],svg[streamline-cocktail-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.536.026a1.447 1.447 0 0 0-1.138 2.342L6.25 8.543v3.946H4a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H7.75V8.543l4.852-6.175A1.447 1.447 0 0 0 11.464.026zM9.805 3.5l1.55-1.974h-8.71L4.195 3.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineCocktailSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
