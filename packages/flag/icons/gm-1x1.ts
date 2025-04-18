import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagGm1x1Icon],svg[flag-gm-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-rule="evenodd" stroke-width="1pt"><svg:path fill="red" d="M0 0h512v170.7H0z"></svg:path><svg:path fill="#fff" d="M0 170.7h512V199H0z"></svg:path><svg:path fill="#009" d="M0 199.1h512V313H0z"></svg:path><svg:path fill="#fff" d="M0 312.9h512v28.4H0z"></svg:path><svg:path fill="#090" d="M0 341.3h512V512H0z"></svg:path></svg:g>`,
})
export class FlagGm1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
