import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightStarHalfIcon],svg[mdi-light-star-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11 6.06l-1.86 4.39l-4.75.41L8 14l-1.08 4.63L11 16.18v1.16L5.42 20.7l1.46-6.35l-4.92-4.28l6.49-.57l2.55-6z"></svg:path>`,
})
export class MdiLightStarHalfIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
