import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsOutlineMagnifyingGlassCircleIcon],svg[heroicons-outline-magnifying-glass-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773a3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0Z"></svg:path>`,
})
export class HeroiconsOutlineMagnifyingGlassCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
