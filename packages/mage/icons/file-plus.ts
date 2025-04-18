import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageFilePlusIcon],svg[mage-file-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M14.186 2.753v3.596c0 .487.194.955.54 1.3a1.85 1.85 0 0 0 1.306.539h4.125"></svg:path><svg:path stroke-linejoin="round" d="M20.25 8.568v8.568a4.25 4.25 0 0 1-1.362 2.97a4.28 4.28 0 0 1-3.072 1.14h-7.59a4.3 4.3 0 0 1-3.1-1.124a4.26 4.26 0 0 1-1.376-2.986V6.862a4.25 4.25 0 0 1 1.362-2.97a4.28 4.28 0 0 1 3.072-1.14h5.714a3.5 3.5 0 0 1 2.361.905l2.96 2.722a2.97 2.97 0 0 1 1.031 2.189"></svg:path><svg:path stroke-miterlimit="10" d="M11.57 10.424v7.116m-3.55-3.55h7.117"></svg:path></svg:g>`,
})
export class MageFilePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
