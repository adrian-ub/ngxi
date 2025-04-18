import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotonePersonAddIcon],svg[ic-twotone-person-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 16c-2.69 0-5.77 1.28-6 2h12c-.2-.71-3.3-2-6-2" opacity=".3"></svg:path><svg:circle cx="15" cy="8" r="2" fill="currentColor" opacity=".3"></svg:circle><svg:path fill="currentColor" d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m0-6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m0 8c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4m-6 4c.22-.72 3.31-2 6-2c2.7 0 5.8 1.29 6 2zm-3-3v-3h3v-2H6V7H4v3H1v2h3v3z"></svg:path>`,
})
export class IcTwotonePersonAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
