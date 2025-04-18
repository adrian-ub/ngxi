import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siPhoneEnabledDuotoneIcon],svg[si-phone-enabled-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="m16.82 10.27l-6.504 6.46c-.697-.807-5.11-5.538-7.316.924c0 0 .232 3.346 4.994 3.346c3.367 0 6.851-4.038 9.29-6.346c2.09-1.962 3.716-4.5 3.716-6.808C21 3.116 17.748 3 17.748 3c-7.432 2.538-.929 7.27-.929 7.27"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m16.82 10.27l-6.504 6.46c-.697-.807-5.11-5.538-7.316.924c0 0 .232 3.346 4.994 3.346c3.367 0 6.851-4.038 9.29-6.346c2.09-1.962 3.716-4.5 3.716-6.808C21 3.116 17.748 3 17.748 3c-7.432 2.538-.929 7.27-.929 7.27Z"></svg:path></svg:g>`,
})
export class SiPhoneEnabledDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
