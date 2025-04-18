import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWishIcon],svg[arcticons-wish-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.917 28.754a5.84 5.84 0 0 0 5.909 6.983a8.45 8.45 0 0 0 8.057-6.983"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.883 28.754a5.84 5.84 0 0 0 5.908 6.983a8.45 8.45 0 0 0 8.058-6.983m0 0l.651-9.063m-14.617 9.063l.651-5.868m-14.617 5.868l1.246-11.811L4.5 12.263"></svg:path>`,
})
export class ArcticonsWishIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
