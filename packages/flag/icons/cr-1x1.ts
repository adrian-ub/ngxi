import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagCr1x1Icon],svg[flag-cr-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-rule="evenodd" stroke-width="1pt"><svg:path fill="#0000b4" d="M0 0h512v512H0z"></svg:path><svg:path fill="#fff" d="M0 80.5h512v343.7H0z"></svg:path><svg:path fill="#d90000" d="M0 168.2h512v168.2H0z"></svg:path></svg:g>`,
})
export class FlagCr1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
