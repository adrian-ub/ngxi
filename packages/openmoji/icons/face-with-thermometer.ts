import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFaceWithThermometerIcon],svg[openmoji-face-with-thermometer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="openmojiFaceWithThermometer0" fill="none" stroke="#000" d="m40 49.3l-.7-.8c-.7-.9-.6-2.2.2-2.9l17-14.4c.9-.7 2.2-.6 2.9.2l.7.8c.7.9.6 2.2-.2 2.9l-17 14.4c-.8.8-2.1.7-2.9-.2z"></svg:path></svg:defs><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M47.744 38.641c.1-.1.3-.2.5-.3c2-.6 3.9 1.4 3.3 3.4c-.1.3-.2.6-.5.8"></svg:path><svg:circle cx="36" cy="36" r="24" fill="#FCEA2B"></svg:circle><svg:path fill="#FFF" d="m40 49.2l-.7-.8c-.7-.9-.6-2.2.2-2.9l17-14.4c.9-.7 2.2-.6 2.9.2l.7.8c.7.9.6 2.2-.2 2.9l-17 14.4c-.8.8-2.1.7-2.9-.2"></svg:path><svg:path fill="#EA5A47" d="m39.8 49l-.2-.3c-.6-.7-.5-1.7.2-2.3l8.6-7.3c.7-.6 1.7-.5 2.3.2l.2.3c.6.7.5 1.7-.2 2.3l-8.6 7.3c-.7.6-1.7.5-2.3-.2"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M50.975 27.2c-1.6-2.8-4.8-4.1-7.9-3.4"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M56.991 26.66C53.376 18.624 45.341 13 36 13c-12.655 0-23 10.245-23 23c0 12.655 10.245 23 23 23c10.646 0 19.585-7.231 22.197-16.974"></svg:path><svg:path d="M30 33a3.001 3.001 0 0 1-6 0c0-1.655 1.345-3 3-3s3 1.345 3 3m18 0a3.001 3.001 0 0 1-6 0c0-1.655 1.345-3 3-3s3 1.345 3 3"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M21.025 27.2c.7-1.4 1.9-2.4 3.4-3c1.4-.7 3-.8 4.5-.4"></svg:path><svg:use href="#openmojiFaceWithThermometer0" stroke-miterlimit="10"></svg:use><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M29.6 50.7c4.3-2.3 9.1-2.4 12.8 0"></svg:path><svg:use href="#openmojiFaceWithThermometer0" stroke-miterlimit="10" stroke-width="2"></svg:use>`,
})
export class OpenmojiFaceWithThermometerIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
