import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageUserCrossIcon],svg[mage-user-cross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M11.959 14.724c-3.6 0-7.62 2.928-7.62 6.526m7.62-9.785a4.36 4.36 0 0 0 4.035-2.683a4.355 4.355 0 0 0-3.17-5.948a4.362 4.362 0 0 0-5.215 4.274a4.356 4.356 0 0 0 4.35 4.357"></svg:path><svg:path stroke-miterlimit="10" d="m19.661 15.487l-5 4.989m0-4.978l5 4.989"></svg:path></svg:g>`,
})
export class MageUserCrossIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
