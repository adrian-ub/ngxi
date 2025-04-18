import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiBicycleIcon],svg[openmoji-bicycle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="openmojiBicycle0" d="m21.1 46l1.7-21.4M36 45L23 30m22 0l8 16M23 30h21m2-1.6L36 45m0 0l17 1"></svg:path></svg:defs><svg:path d="M31 45a.945.945 0 0 0-1 1a9.2 9.2 0 1 1-9.2-9.2l.2-2h-.2c-6.186 0-11.2 5.014-11.2 11.2s5.014 11.2 11.2 11.2S32 52.186 32 46a.945.945 0 0 0-1-1m21.8-10.2a12.3 12.3 0 0 0-3.9.7l.9 1.8a10.5 10.5 0 0 1 3-.5a9.2 9.2 0 1 1-9.1 9.7l-2-.1c.246 6.156 5.436 10.946 11.591 10.7c6.156-.246 10.946-5.436 10.7-11.591c-.24-6-5.186-10.734-11.191-10.709"></svg:path><svg:path d="m48 38.2l-.9-1.8a11.1 11.1 0 0 0-5.3 7.9l2 .1c.478-2.56 2-4.806 4.2-6.2"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M23 22h4m15 3.7h6"></svg:path><svg:use href="#openmojiBicycle0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></svg:use><svg:g fill="#fff"><svg:circle cx="53.262" cy="45.918" r="8.563"></svg:circle><svg:circle cx="20.806" cy="46.131" r="8.563"></svg:circle><svg:path d="m30.912 33.246l7.624.131l-2.76 6.179z"></svg:path></svg:g><svg:use href="#openmojiBicycle0" fill="none" stroke="#ea5a47" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.1"></svg:use>`,
})
export class OpenmojiBicycleIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
