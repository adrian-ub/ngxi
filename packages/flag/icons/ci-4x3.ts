import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagCi4x3Icon],svg[flag-ci-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-rule="evenodd"><svg:path fill="#00cd00" d="M426.8 0H640v480H426.8z"></svg:path><svg:path fill="#ff9a00" d="M0 0h212.9v480H0z"></svg:path><svg:path fill="#fff" d="M212.9 0h214v480h-214z"></svg:path></svg:g>`,
})
export class FlagCi4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
