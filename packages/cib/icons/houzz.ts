import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibHouzzIcon],svg[cib-houzz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25.24 16v10.667L16 32V21.328l-9.24 5.339V5.328L16 0v10.667L6.76 16L16 21.328V10.667l9.24-5.339z"></svg:path>`,
})
export class CibHouzzIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
