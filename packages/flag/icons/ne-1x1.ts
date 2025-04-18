import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagNe1x1Icon],svg[flag-ne-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#0db02b" d="M0 0h512v512H0z"></svg:path><svg:path fill="#fff" d="M0 0h512v341.3H0z"></svg:path><svg:path fill="#e05206" d="M0 0h512v170.7H0z"></svg:path><svg:circle cx="256" cy="256" r="72.5" fill="#e05206"></svg:circle>`,
})
export class FlagNe1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
