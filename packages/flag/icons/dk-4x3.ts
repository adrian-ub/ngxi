import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagDk4x3Icon],svg[flag-dk-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#c8102e" d="M0 0h640.1v480H0z"></svg:path><svg:path fill="#fff" d="M205.7 0h68.6v480h-68.6z"></svg:path><svg:path fill="#fff" d="M0 205.7h640.1v68.6H0z"></svg:path>`,
})
export class FlagDk4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
