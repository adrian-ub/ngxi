import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiGoogleWalletIcon],svg[mdi-google-wallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M15.44 2.56h4.8s2.88 8.8 0 18.96h-4.72s-.4-4.72-2.24-8.72c0 0-.8 3.28-1.68 5.2H6.72s-.96-4.56-4.24-8.48h4.8s.88.88 1.6 2.08c0 0 .64-2.48.64-5.6h4.8s1.6 2.32 2.32 3.76c0 0-.24-3.52-1.2-7.2z" fill="currentColor"></svg:path>`,
})
export class MdiGoogleWalletIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
