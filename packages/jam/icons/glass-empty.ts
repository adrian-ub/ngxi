import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamGlassEmptyIcon],svg[jam-glass-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5a5 5 0 1 0 9-3H3c-.643.854-1 1.897-1 3m4 13v-6.07A7.002 7.002 0 0 1 2.101 0h9.798A7.002 7.002 0 0 1 8 11.93V18h2a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></svg:path>`,
})
export class JamGlassEmptyIcon {
  readonly viewBox = input("-5 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
