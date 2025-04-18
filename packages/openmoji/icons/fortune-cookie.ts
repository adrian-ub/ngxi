import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFortuneCookieIcon],svg[openmoji-fortune-cookie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d0cfce" d="m12.123 35.832l4.575-7.208l14.508 9.21l-4.575 7.207z"></svg:path><svg:path fill="#fcea2b" d="M38.089 37.047a25.4 25.4 0 0 0-5.68 1.228a29.26 29.26 0 0 0-10.8 7.09l-.005.005c-.078.086-.236.26-.242.27a14.5 14.5 0 0 0 2.372 2.855a19.399 19.399 0 1 0 1.789-24.545a20.1 20.1 0 0 0-4.161 4.505c.006.01.163.184.242.27l.005.005A43.4 43.4 0 0 0 33 37"></svg:path><svg:path fill="#f1b31c" d="M49.896 20.99a19.3 19.3 0 0 0-12.26-2.938a19.2 19.2 0 0 1 8.577 2.939a19.352 19.352 0 0 1-8.668 35.618a19.37 19.37 0 0 0 12.35-35.618Z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M38.089 37.047a25.4 25.4 0 0 0-5.68 1.228a29.26 29.26 0 0 0-10.8 7.09l-.005.005c-.078.086-.236.26-.242.27a14.5 14.5 0 0 0 2.372 2.855a19.399 19.399 0 1 0 1.789-24.545a20.1 20.1 0 0 0-4.161 4.505c.006.01.163.184.242.27l.005.005C26.132 33.678 34 37 34 37"></svg:path><svg:path d="m17.847 38.124l-5.117-3.248l3.386-5.335l8.178 5.191"></svg:path></svg:g>`,
})
export class OpenmojiFortuneCookieIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
