import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineWalletPurseSolidIcon],svg[streamline-wallet-purse-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 .25a.75.75 0 0 1 .75.75a1.25 1.25 0 0 0 2.5 0a.75.75 0 0 1 1.5 0a2.75 2.75 0 0 1-.479 1.55a9.6 9.6 0 0 1 4.497 2.528a.75.75 0 0 1-1.06 1.062a8.077 8.077 0 0 0-11.416 0a.75.75 0 0 1-1.06-1.062A9.6 9.6 0 0 1 4.73 2.551A2.75 2.75 0 0 1 4.25 1A.75.75 0 0 1 5 .25M7 5a7 7 0 0 0-7 7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2a7 7 0 0 0-7-7" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineWalletPurseSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
