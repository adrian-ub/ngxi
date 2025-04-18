import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconEmbeddedcIcon],svg[devicon-embeddedc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#b3b3b3" transform="matrix(1 0 0 .8 0 27.184)"><svg:g transform="translate(112)"><svg:rect width="16" height="10" y="86" ry="2"></svg:rect><svg:rect width="16" height="10" y="41" ry="2"></svg:rect><svg:rect width="16" height="10" y="18.5" ry="2"></svg:rect><svg:rect width="16" height="10" y="-4" ry="2"></svg:rect><svg:rect width="16" height="10" y="63.5" ry="2"></svg:rect></svg:g><svg:g transform="matrix(0 1.25 -.8 0 100.82 106.02)"><svg:rect width="16" height="10" y="86" ry="2"></svg:rect><svg:rect width="16" height="10" y="41" ry="2"></svg:rect><svg:rect width="16" height="10" y="18.5" ry="2"></svg:rect><svg:rect width="16" height="10" y="-4" ry="2"></svg:rect><svg:rect width="16" height="10" y="63.5" ry="2"></svg:rect></svg:g><svg:rect width="16" height="10" y="86" ry="2"></svg:rect><svg:rect width="16" height="10" y="41" ry="2"></svg:rect><svg:rect width="16" height="10" y="18.5" ry="2"></svg:rect><svg:rect width="16" height="10" y="-4" ry="2"></svg:rect><svg:rect width="16" height="10" y="63.5" ry="2"></svg:rect><svg:g transform="matrix(0 1.25 -.8 0 100.82 -33.979)"><svg:rect width="16" height="10" y="86" ry="2"></svg:rect><svg:rect width="16" height="10" y="41" ry="2"></svg:rect><svg:rect width="16" height="10" y="18.5" ry="2"></svg:rect><svg:rect width="16" height="10" y="-4" ry="2"></svg:rect><svg:rect width="16" height="10" y="63.5" ry="2"></svg:rect></svg:g><svg:rect width="100" height="126" x="14" y="-17.5" fill="#000" ry="3.8"></svg:rect><svg:path fill="#fff" d="M85.3 61.1C81.1 70.4 73.1 76.6 64 76.6c-13.5 0-24.5-13.7-24.5-30.6s11-30.6 24.5-30.6c9.1 0 17.1 6.3 21.3 15.6l13-9.4C91.5 6.7 78.7-3.4 64-3.4C42.2-3.4 24.5 18.7 24.5 46S42.2 95.4 64 95.4c14.6 0 27.4-10 34.2-24.7z"></svg:path><svg:ellipse cx="23" cy="-5.2" fill="#fff" rx="3" ry="3.8"></svg:ellipse></svg:g>`,
})
export class DeviconEmbeddedcIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
