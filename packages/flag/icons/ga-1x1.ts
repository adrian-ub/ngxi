import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagGa1x1Icon],svg[flag-ga-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-rule="evenodd"><svg:path fill="#ffe700" d="M512 512H0V0h512z"></svg:path><svg:path fill="#36a100" d="M512 170.7H0V0h512z"></svg:path><svg:path fill="#006dbc" d="M512 512H0V341.3h512z"></svg:path></svg:g>`,
})
export class FlagGa1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
