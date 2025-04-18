import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyEtcIcon],svg[cryptocurrency-etc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16s-7.163 16-16 16m6.732-16L16 12.19L9.268 16L16 19.781l6.732-3.783zM16 21.047a3944 3944 0 0 0-7-3.952c2.079 3.248 4.66 7.26 7 10.904c2.34-3.643 4.921-7.656 7-10.904a3944 3944 0 0 0-7 3.952m0-10.089l7 3.907L16 4L9 14.866z"></svg:path><svg:path fill-opacity=".296" fill-rule="nonzero" d="m22.71 15.976l-6.721.577v-4.379l6.72 3.802zm-6.721 5.038c1.98-1.12 4.537-2.564 6.988-3.944c-2.076 3.242-4.652 7.246-6.988 10.882zm0-10.069V4l6.988 10.845z"></svg:path><svg:path fill-opacity=".803" d="m15.989 16.553l6.72-.577l-6.72 3.775z"></svg:path><svg:path d="m15.988 16.553l-6.721-.577l6.721 3.775z" opacity=".311"></svg:path></svg:g>`,
})
export class CryptocurrencyEtcIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
