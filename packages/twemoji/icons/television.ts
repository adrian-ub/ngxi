import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiTelevisionIcon],svg[twemoji-television-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#31373D" d="M35 31s0 4-4 4H5c-4 0-4-4-4-4V12c0-4 4-4 4-4h26s4 0 4 4z"></svg:path><svg:path fill="#31373D" d="M21.303 10.389a.999.999 0 1 1-1.414 1.414l-9.192-9.192a.999.999 0 1 1 1.414-1.414z"></svg:path><svg:path fill="#31373D" d="M14.697 10.389a.999.999 0 1 0 1.414 1.414l9.192-9.192a.999.999 0 1 0-1.414-1.414z"></svg:path><svg:path fill="#55ACEE" d="M18 11c8 0 10 1 11 2s2 3 2 8s-1 7-2 8s-3 2-11 2s-10-1-11-2s-2-3-2-8s1-7 2-8s3-2 11-2"></svg:path><svg:circle cx="31.5" cy="31.5" r="1.5" fill="#66757F"></svg:circle><svg:circle cx="4.5" cy="31.5" r="1.5" fill="#66757F"></svg:circle>`,
})
export class TwemojiTelevisionIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
