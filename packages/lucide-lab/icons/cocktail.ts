import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabCocktailIcon],svg[lucide-lab-cocktail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M9 6L6.6 2.8C6.3 2.4 5.6 2 5 2H2m16 4l-7 8l-7-8Z"></svg:path><svg:path d="M15.4 9.1A4 4 0 1 0 14 6m-3 8v8m-4 0h8"></svg:path></svg:g>`,
})
export class LucideLabCocktailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
