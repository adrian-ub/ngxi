import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagGa4x3Icon],svg[flag-ga-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-rule="evenodd"><svg:path fill="#ffe700" d="M640 480H0V0h640z"></svg:path><svg:path fill="#36a100" d="M640 160H0V0h640z"></svg:path><svg:path fill="#006dbc" d="M640 480H0V320h640z"></svg:path></svg:g>`,
})
export class FlagGa4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
