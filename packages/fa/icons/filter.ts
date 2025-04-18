import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faFilterIcon],svg[fa-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1403 39q17 41-14 70L896 602v742q0 42-39 59q-13 5-25 5q-27 0-45-19l-256-256q-19-19-19-45V602L19 109Q-12 80 5 39Q22 0 64 0h1280q42 0 59 39"></svg:path>`,
})
export class FaFilterIcon {
  readonly viewBox = input("0 0 1408 1408")
  readonly width = input("1em")
  readonly height = input("1em")
}
