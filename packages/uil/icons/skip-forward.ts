import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilSkipForwardIcon],svg[uil-skip-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3a3 3 0 0 0-3 3v2.84L7 3.47a3.21 3.21 0 0 0-3.29 0A3.38 3.38 0 0 0 2 6.42v11.16a3.38 3.38 0 0 0 1.72 3a3.24 3.24 0 0 0 1.61.42A3.3 3.3 0 0 0 7 20.53l9-5.37V18a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3m-3.68 10.23L6 18.81a1.23 1.23 0 0 1-1.28 0A1.4 1.4 0 0 1 4 17.58V6.42a1.4 1.4 0 0 1 .71-1.25A1.3 1.3 0 0 1 5.33 5a1.23 1.23 0 0 1 .67.19l9.33 5.58a1.45 1.45 0 0 1 0 2.46ZM20 18a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0Z"></svg:path>`,
})
export class UilSkipForwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
