import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamPadlockIcon],svg[jam-padlock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12v6h10v-6zm10-2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2V5a5 5 0 1 1 10 0zm-2 0V5a3 3 0 1 0-6 0v5zm-3 7a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class JamPadlockIcon {
  readonly viewBox = input("-5 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
