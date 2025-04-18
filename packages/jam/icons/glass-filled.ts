import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamGlassFilledIcon],svg[jam-glass-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.1 4h9.8a5 5 0 0 0-.9-2H3a5 5 0 0 0-.9 2m9.8 2H2.1a5.002 5.002 0 0 0 9.8 0M6 18v-6.07A7.002 7.002 0 0 1 2.101 0h9.798A7.002 7.002 0 0 1 8 11.93V18h2a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></svg:path>`,
})
export class JamGlassFilledIcon {
  readonly viewBox = input("-5 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
