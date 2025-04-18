import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siPhoneDuotoneIcon],svg[si-phone-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="m7.18 10.27l6.504 6.46c.697-.807 5.11-5.538 7.316.924c0 0-.232 3.346-4.994 3.346c-3.367 0-6.851-4.038-9.29-6.346C4.626 12.692 3 10.154 3 7.846C3 3.116 6.252 3 6.252 3c7.432 2.538.929 7.27.929 7.27"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m7.18 10.27l6.504 6.46c.697-.807 5.11-5.538 7.316.924c0 0-.232 3.346-4.994 3.346c-3.367 0-6.851-4.038-9.29-6.346C4.626 12.692 3 10.154 3 7.846C3 3.116 6.252 3 6.252 3c7.432 2.538.929 7.27.929 7.27Z"></svg:path></svg:g>`,
})
export class SiPhoneDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
