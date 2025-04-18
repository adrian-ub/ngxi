import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPhoneCheckIcon],svg[mdi-phone-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.62 10.79a15.1 15.1 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1-.25a11.4 11.4 0 0 0 3.59.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1a11.4 11.4 0 0 0 .57 3.57a1 1 0 0 1-.25 1m12.89-3.86l-1.42-1.42L15 8.59l-2.29-2.3l-1.42 1.42l3.71 3.7Z"></svg:path>`,
})
export class MdiPhoneCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
