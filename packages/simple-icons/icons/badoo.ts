import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsBadooIcon],svg[simple-icons-badoo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.68 2.809c3.392 0 6.32 2.788 6.32 6.228c0 6.71-6.6 12.158-12 12.158S0 15.748 0 9.037c0-3.44 2.928-6.228 6.32-6.228c4.128 0 5.578 3.179 5.68 3.411a6.08 6.08 0 0 1 5.67-3.411zm1.078 6.488V9.11h-2.38v.186c0 2.352-1.97 4.276-4.378 4.276c-2.417 0-4.369-1.924-4.369-4.276V9.11H5.233v.186c0 1.766.697 3.42 1.98 4.666a6.8 6.8 0 0 0 4.778 1.933a6.8 6.8 0 0 0 4.777-1.933a6.5 6.5 0 0 0 1.98-4.666Z"></svg:path>`,
})
export class SimpleIconsBadooIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
