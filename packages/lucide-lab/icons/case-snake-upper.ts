import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabCaseSnakeUpperIcon],svg[lucide-lab-case-snake-upper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 16v-5.5a2.5 2.5 0 0 1 5 0V16m0-3H2m9 3h2m4-4h3a2 2 0 1 1 0 4h-3V8h2.5a2 2 0 0 1 .1 4"></svg:path>`,
})
export class LucideLabCaseSnakeUpperIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
