import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenL2Icon],svg[token-l2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m0-.53a8.47 8.47 0 1 0 0-16.94a8.47 8.47 0 0 0 0 16.94" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M13.08 15.939L7.844 6.706h10.509z"></svg:path><svg:path fill="currentColor" d="m10.877 8.062l-5.231 9.233h10.509z"></svg:path><svg:path fill="currentColor" d="m9.745 10.063l3.335 5.876l1.149-2.012l-3.352-5.865z"></svg:path>`,
})
export class TokenL2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
