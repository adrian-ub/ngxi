import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpTempleBuddhistIcon],svg[ic-sharp-temple-buddhist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 9.02c0 1.09-.89 1.98-1.98 1.98H4.98C3.89 11 3 10.11 3 9.02H1c0 1.86 1.28 3.4 3 3.84V22h6v-5h4v5h6v-9.14c.55-.14 3-1.04 3-3.86z"></svg:path><svg:path fill="currentColor" d="M6 8.86V10h12V8.86c.55-.14 3-1.04 3-3.86l-2 .02C19 6.11 18.11 7 17.02 7H6.98C5.89 7 5 6.11 5 5.02H3c0 1.85 1.28 3.4 3 3.84"></svg:path><svg:path fill="currentColor" d="M12 1L8.25 6h7.5z"></svg:path>`,
})
export class IcSharpTempleBuddhistIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
