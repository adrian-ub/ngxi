import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamGlassFilledFIcon],svg[jam-glass-filled-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 18v-6.07A7.002 7.002 0 0 1 2.101 0h9.798A7.002 7.002 0 0 1 8 11.93V18h2a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zM2 5h10q-.357-2.145-1-3H3q-.643.855-1 3"></svg:path>`,
})
export class JamGlassFilledFIcon {
  readonly viewBox = input("-5 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
