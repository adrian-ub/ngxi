import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feCocktailIcon],svg[fe-cocktail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19h3a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2h3v-6.75L4.8 7.6A2 2 0 0 1 4 6V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1a2 2 0 0 1-.8 1.6L13 12.25zM6 5v1l6 4l6-4V5z"></svg:path>`,
})
export class FeCocktailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
