import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsWallet1Icon],svg[lineicons-wallet-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.75 3.25A2.25 2.25 0 0 0 3.5 5.5v13a2.25 2.25 0 0 0 2.25 2.25h13A2.25 2.25 0 0 0 21 18.5v-9a2.25 2.25 0 0 0-2.25-2.25h-.25V5.5a2.25 2.25 0 0 0-2.25-2.25zm11.25 4H5V5.5a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 .75.75zM5 8.75h13.75a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-.75.75h-13A.75.75 0 0 1 5 18.5z"></svg:path>`,
})
export class LineiconsWallet1Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}
