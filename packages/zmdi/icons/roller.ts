import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiRollerIcon],svg[zmdi-roller-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M299 45h64v171H192v192q0 9-6.5 15t-14.5 6h-43q-9 0-15-6t-6-15V173h213V88h-21v21q0 9-6.5 15.5T277 131H21q-8 0-14.5-6.5T0 109V24q0-9 6.5-15T21 3h256q9 0 15.5 6t6.5 15z"></svg:path>`,
})
export class ZmdiRollerIcon {
  readonly viewBox = input("0 0 368 432")
  readonly width = input("0.86em")
  readonly height = input("1em")
}
