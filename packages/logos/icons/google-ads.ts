import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosGoogleAdsIcon],svg[logos-google-ads-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FBBC04" d="M5.888 166.405L90.88 20.9c10.796 6.356 65.236 36.484 74.028 42.214L79.916 208.627c-9.295 12.28-85.804-23.587-74.028-42.23z"></svg:path><svg:path fill="#4285F4" d="M250.084 166.402L165.092 20.906C153.21 1.132 127.62-6.054 106.601 5.625S79.182 42.462 91.064 63.119l84.992 145.514c11.882 19.765 37.473 26.95 58.492 15.272c20.1-11.68 27.418-37.73 15.536-57.486z"></svg:path><svg:ellipse cx="42.664" cy="187.924" fill="#34A853" rx="42.664" ry="41.604"></svg:ellipse>`,
})
export class LogosGoogleAdsIcon {
  readonly viewBox = input("0 0 256 230")
  readonly width = input("1.12em")
  readonly height = input("1em")
}
