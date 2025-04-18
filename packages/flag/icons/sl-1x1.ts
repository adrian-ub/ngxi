import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagSl1x1Icon],svg[flag-sl-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagSl1x10"><svg:rect width="384" height="512" rx="4.6" ry="7.6"></svg:rect></svg:clippath></svg:defs><svg:g fill-rule="evenodd" clip-path="url(#flagSl1x10)" transform="scale(1.33333 1)"><svg:path fill="#0000cd" d="M0 341.7h512V512H0z"></svg:path><svg:path fill="#fff" d="M0 171.4h512v170.3H0z"></svg:path><svg:path fill="#00cd00" d="M0 0h512v171.4H0z"></svg:path></svg:g>`,
})
export class FlagSl1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
