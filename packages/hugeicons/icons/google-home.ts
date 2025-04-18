import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsGoogleHomeIcon],svg[hugeicons-google-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 11.27C22 16.644 17.523 21 12 21S2 16.644 2 11.27c0-2.503.972-4.786 2.569-6.51c.445-.482.668-.722 1.315-1.047c.648-.325 1.104-.374 2.016-.473A40 40 0 0 1 12 3c1.489 0 2.977.12 4.1.24c.912.099 1.368.148 2.016.473s.87.565 1.315 1.046A9.55 9.55 0 0 1 22 11.27"></svg:path><svg:path d="M18 4c0 1.105-2.686 2-6 2s-6-.895-6-2"></svg:path></svg:g>`,
})
export class HugeiconsGoogleHomeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
