import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFlagForFlagBrazilIcon],svg[twemoji-flag-for-flag-brazil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#009B3A" d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v18z"></svg:path><svg:path fill="#FEDF01" d="M32.728 18L18 29.124L3.272 18L18 6.875z"></svg:path><svg:circle fill="#002776" cx="17.976" cy="17.924" r="6.458"></svg:circle><svg:path fill="#CBE9D4" d="M12.277 14.887a6.406 6.406 0 0 0-.672 2.023c3.995-.29 9.417 1.891 11.744 4.595c.402-.604.7-1.28.883-2.004c-2.872-2.808-7.917-4.63-11.955-4.614z"></svg:path><svg:path fill="#88C9F9" d="M12 18.233h1v1h-1zm1 2h1v1h-1z"></svg:path><svg:path fill="#55ACEE" d="M15 18.233h1v1h-1zm2 1h1v1h-1zm4 2h1v1h-1zm-3 1h1v1h-1zm3-6h1v1h-1z"></svg:path><svg:path fill="#3B88C3" d="M19 20.233h1v1h-1z"></svg:path>`,
})
export class TwemojiFlagForFlagBrazilIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
