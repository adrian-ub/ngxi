import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsPhoneIcon],svg[proicons-phone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:rect width="12.5" height="18.5" x="5.75" y="2.75" rx="3"></svg:rect><svg:path d="M11 17.75h2"></svg:path></svg:g>`,
})
export class ProiconsPhoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
