import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFaceWithOpenMouthIcon],svg[openmoji-face-with-open-mouth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="36" cy="36" r="23" fill="#FCEA2B"></svg:circle><svg:circle cx="36" cy="47.343" r="5.745" fill="#FFF"></svg:circle><svg:circle cx="36" cy="36" r="23" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"></svg:circle><svg:circle cx="36" cy="47.343" r="5.745" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"></svg:circle><svg:path d="M30 31a3.001 3.001 0 0 1-6 0c0-1.655 1.345-3 3-3s3 1.345 3 3m18 0a3.001 3.001 0 0 1-6 0c0-1.655 1.345-3 3-3s3 1.345 3 3"></svg:path>`,
})
export class OpenmojiFaceWithOpenMouthIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
