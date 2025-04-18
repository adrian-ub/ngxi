import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiBarberPoleIcon],svg[arcticons-emoji-barber-pole-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.893 8.583H15.107c-.854 0-1.546-.69-1.546-1.541h0c0-.852.692-1.542 1.546-1.542h17.786c.854 0 1.546.69 1.546 1.542h0c0 .851-.692 1.541-1.546 1.541m0 33.917H15.107c-.854 0-1.546-.69-1.546-1.542h0c0-.851.692-1.541 1.546-1.541h17.786c.854 0 1.546.69 1.546 1.541h0c0 .852-.692 1.542-1.546 1.542M27.73 8.583l-12.236 6.938v-3.084l6.543-3.854zM15.494 24.77l17.012-10.02v-3.083l-17.012 10.02zm17.012-3.853l-17.012 10.02v3.084L32.506 24z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m32.506 30.167l-15.704 9.25h5.235l10.47-6.167zm0-21.584H27.73l-12.235 6.938v6.166l17.012-10.02z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m32.506 30.167l-15.704 9.25h-1.308V34.02L32.506 24z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.494 8.583h17.012v30.834H15.494z"></svg:path>`,
})
export class ArcticonsEmojiBarberPoleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
