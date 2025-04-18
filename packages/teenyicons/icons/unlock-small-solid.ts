import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsUnlockSmallSolidIcon],svg[teenyicons-unlock-small-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 5.621a1.621 1.621 0 0 1 2.768-1.146l.378.379l.708-.708l-.38-.378A2.621 2.621 0 0 0 5 5.62v.464A1.5 1.5 0 0 0 4 7.5v3A1.5 1.5 0 0 0 5.5 12h4a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 9.5 6H6z"></svg:path>`,
})
export class TeenyiconsUnlockSmallSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
