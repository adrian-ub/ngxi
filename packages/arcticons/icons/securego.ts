import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSecuregoIcon],svg[arcticons-securego-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 39.756c1.485 0 13.402-4.995 13.402-11.938V13.865L24 10.275l-13.402 3.59v13.953c0 6.943 11.917 11.938 13.402 11.938"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.044 21.595h16.078v9.287c-.019.5-.455.833-1.081.833H17.218c-.734 0-1.34-.537-1.34-1.032zm.071 3.037H31.92"></svg:path>`,
})
export class ArcticonsSecuregoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
