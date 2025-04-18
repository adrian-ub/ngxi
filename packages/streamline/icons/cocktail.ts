import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCocktailIcon],svg[streamline-cocktail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.679 3h8.642M7 8.5L1.659 1.702a.74.74 0 0 1-.159-.459v0c0-.41.333-.743.743-.743h9.514c.41 0 .743.333.743.743v0a.74.74 0 0 1-.159.46zm0 0v5m-3 0h6"></svg:path>`,
})
export class StreamlineCocktailIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
