import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsImageCompositionOvalIcon],svg[hugeicons-image-composition-oval-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2 8.356c0-1.544 0-2.316.45-3.042c.448-.725 1.007-1.003 2.123-1.56a16.6 16.6 0 0 1 14.854 0c1.116.557 1.675.835 2.124 1.56S22 6.812 22 8.356v7.288c0 1.544 0 2.316-.45 3.042c-.449.726-1.007 1.004-2.123 1.56a16.6 16.6 0 0 1-14.854 0c-1.116-.556-1.674-.834-2.124-1.56C2 17.96 2 17.188 2 15.644z"></svg:path><svg:path d="M2 14.135q1.001-.135 2.016-.132c2.856-.056 5.642.77 7.86 2.331c2.06 1.448 3.505 3.44 4.124 5.666"></svg:path><svg:path d="M22 16.896c-1.175-.595-2.391-.897-3.614-.896c-1.851-.007-3.684.673-5.386 2"></svg:path><svg:circle cx="6.5" cy="7.5" r="1.5"></svg:circle></svg:g>`,
})
export class HugeiconsImageCompositionOvalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
