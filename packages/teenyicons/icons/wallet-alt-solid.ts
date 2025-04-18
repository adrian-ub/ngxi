import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsWalletAltSolidIcon],svg[teenyicons-wallet-alt-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 12.5V10h.43a.57.57 0 0 0 .57-.57V5.57a.57.57 0 0 0-.57-.57H14V2.5A1.5 1.5 0 0 0 12.5 1h-11A1.5 1.5 0 0 0 0 2.5v10A1.5 1.5 0 0 0 1.5 14h11a1.5 1.5 0 0 0 1.5-1.5M14 6v3H9.5a1.5 1.5 0 1 1 0-3z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsWalletAltSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
