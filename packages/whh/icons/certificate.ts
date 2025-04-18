import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhCertificateIcon],svg[whh-certificate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1024 389l-91 122l91 121q-4 18-7 29l-140 60l17 151q-9 10-20 21l-151-18l-61 140l-28 7l-122-91l-122 91q-18-4-28-7l-61-140l-151 18q-7-8-20-21l17-151L7 661q-3-10-7-29l91-121L0 389q4-17 7-28l140-60l-17-151q9-10 20-21l151 18L362 7q9-3 28-7l122 90L634 0q18 4 28 7l61 140l151-18q10 10 20 21l-17 151l140 60z"></svg:path>`,
})
export class WhhCertificateIcon {
  readonly viewBox = input("0 0 1024 1022")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
