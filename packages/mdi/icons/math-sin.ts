import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMathSinIcon],svg[mdi-math-sin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 7a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2v2H2v2h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H4V9h4V7zm10 0v2h-1v6h1v2h-4v-2h1V9h-1V7zm2 0v10h2v-5l2 5h2V7h-2v5l-2-5z"></svg:path>`,
})
export class MdiMathSinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
