import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedBatIcon],svg[token-branded-bat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#FF4724"><svg:path d="M12 4.2a.41.41 0 0 0-.358.207L3.056 19.184a.41.41 0 0 0 0 .414l5.24-2.8l3.705-6.6z"></svg:path><svg:path d="M20.943 19.184L12.358 4.406A.42.42 0 0 0 12 4.2l.001 6l3.694 6.611l5.25 2.788a.41.41 0 0 0-.001-.415"></svg:path><svg:path d="M20.943 19.608L15.7 16.8H8.3l-5.245 2.808a.4.4 0 0 0 .152.14a.44.44 0 0 0 .207.052h17.17a.44.44 0 0 0 .208-.052a.4.4 0 0 0 .152-.14"></svg:path></svg:g>`,
})
export class TokenBrandedBatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
