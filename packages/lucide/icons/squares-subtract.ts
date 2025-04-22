import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideSquaresSubtractIcon],svg[lucide-squares-subtract-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 22a2 2 0 0 1-2-2m8 2h-2m2-18a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-5a2 2 0 0 1 2-2h5a1 1 0 0 0 1-1zm4 4a2 2 0 0 1 2 2m0 4v2m0 4a2 2 0 0 1-2 2"></svg:path>`,
})
export class LucideSquaresSubtractIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
