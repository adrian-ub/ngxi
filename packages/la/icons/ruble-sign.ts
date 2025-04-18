import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laRubleSignIcon],svg[la-ruble-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 6v10H9v2h2v2H9v2h2v4h2v-4h5v-2h-5v-2h6c3.3 0 6-2.7 6-6s-2.7-6-6-6zm2 2h6c2.219 0 4 1.781 4 4s-1.781 4-4 4h-6z"></svg:path>`,
})
export class LaRubleSignIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
