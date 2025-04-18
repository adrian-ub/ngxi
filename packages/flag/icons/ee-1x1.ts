import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagEe1x1Icon],svg[flag-ee-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1791ff" d="M0 0h512v170.7H0z"></svg:path><svg:path fill="#000001" d="M0 170.7h512v170.6H0z"></svg:path><svg:path fill="#fff" d="M0 341.3h512V512H0z"></svg:path>`,
})
export class FlagEe1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
