import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamMinusIcon],svg[jam-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 0h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2"></svg:path>`,
})
export class JamMinusIcon {
  readonly viewBox = input("-5 -11 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
