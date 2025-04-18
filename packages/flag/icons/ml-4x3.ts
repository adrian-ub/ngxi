import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagMl4x3Icon],svg[flag-ml-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-rule="evenodd"><svg:path fill="red" d="M425.8 0H640v480H425.7z"></svg:path><svg:path fill="#009a00" d="M0 0h212.9v480H0z"></svg:path><svg:path fill="#ff0" d="M212.9 0h214v480h-214z"></svg:path></svg:g>`,
})
export class FlagMl4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
