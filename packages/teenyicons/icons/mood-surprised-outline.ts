import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMoodSurprisedOutlineIcon],svg[teenyicons-mood-surprised-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M4 5.5h1m5 0h1m-3.5 9a7 7 0 1 1 0-14a7 7 0 0 1 0 14Zm-.5-7h1a1.5 1.5 0 1 1 0 3H7a1.5 1.5 0 1 1 0-3Z"></svg:path>`,
})
export class TeenyiconsMoodSurprisedOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
