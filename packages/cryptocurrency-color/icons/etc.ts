import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorEtcIcon],svg[cryptocurrency-color-etc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:circle cx="16" cy="16" r="16" fill="#328332"></svg:circle><svg:g fill="#FFF"><svg:path fill-rule="nonzero" d="m15.989 16.553l-6.721-.577l6.72-3.802v4.379zm0 4.46v6.94C13.652 24.315 11.076 20.311 9 17.07c2.45 1.38 5.008 2.823 6.989 3.944zm0-10.068L9 14.845L15.989 4z"></svg:path><svg:path fill-opacity=".601" fill-rule="nonzero" d="m22.71 15.976l-6.721.577v-4.379l6.72 3.802zm-6.721 5.038c1.98-1.12 4.537-2.564 6.988-3.944c-2.076 3.242-4.652 7.246-6.988 10.882zm0-10.069V4l6.988 10.845z"></svg:path><svg:path d="m15.989 16.553l6.72-.577l-6.72 3.775z" opacity=".2"></svg:path><svg:path d="m15.988 16.553l-6.721-.577l6.721 3.775z" opacity=".603"></svg:path></svg:g></svg:g>`,
})
export class CryptocurrencyColorEtcIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
