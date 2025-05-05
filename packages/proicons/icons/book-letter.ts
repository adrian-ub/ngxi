import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsBookLetterIcon],svg[proicons-book-letter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M4.5 16.25V5.75a3 3 0 0 1 3-3h11a1 1 0 0 1 1 1v12.5H7.375M4.5 16.245v2.38"></svg:path><svg:path d="M18.5 21.25H7a2.5 2.5 0 0 1 0-5h12.5v4a1 1 0 0 1-1 1m-9.842-8l1.193-2.872m0 0h4.298m-4.298 0l1.83-4.4c.126-.304.513-.304.639 0l1.829 4.4m0 0l1.193 2.872"></svg:path></svg:g>`,
})
export class ProiconsBookLetterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
