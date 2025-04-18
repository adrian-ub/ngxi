import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagBruneiIcon],svg[openmoji-flag-brunei-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#f1b31c" d="M5 17h62v38H5z"></svg:path><svg:path fill="#fff" stroke="#fff" stroke-miterlimit="10" d="M5 19v5l62 23v-5Z"></svg:path><svg:path stroke="#000" stroke-miterlimit="10" d="M5 25v5l62 23v-5Z"></svg:path><svg:g fill="none" stroke="#d22f27" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M41.528 34.915a6 6 0 1 1-11.057 0M36 28v12.5"></svg:path><svg:path d="M42 43.25c-3.714 3.143-8.143 3.214-12 0m-4-1.5V36l-2-4.25m22 10V36.5l2-4.75m-8.615-.158c-2.277-.818-4.662-.753-6.864-.03"></svg:path></svg:g><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagBruneiIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
