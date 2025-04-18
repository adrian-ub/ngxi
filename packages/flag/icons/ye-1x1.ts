import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagYe1x1Icon],svg[flag-ye-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-rule="evenodd" stroke-width="1pt"><svg:path fill="#fff" d="M0 0h512v504.3H0z"></svg:path><svg:path fill="#f10600" d="M0 0h512v167.9H0z"></svg:path><svg:path fill="#000001" d="M0 344.1h512V512H0z"></svg:path></svg:g>`,
})
export class FlagYe1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
