import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagUa1x1Icon],svg[flag-ua-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-rule="evenodd" stroke-width="1pt"><svg:path fill="gold" d="M0 0h512v512H0z"></svg:path><svg:path fill="#0057b8" d="M0 0h512v256H0z"></svg:path></svg:g>`,
})
export class FlagUa1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
