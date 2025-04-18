import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsBorderAllIcon],svg[radix-icons-border-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M.25 1A.75.75 0 0 1 1 .25h13a.75.75 0 0 1 .75.75v13a.75.75 0 0 1-.75.75H1A.75.75 0 0 1 .25 14zm1.5.75v11.5h11.5V1.75z" clip-rule="evenodd"></svg:path><svg:rect width="1" height="1" x="7" y="5" rx=".5"></svg:rect><svg:rect width="1" height="1" x="7" y="3" rx=".5"></svg:rect><svg:rect width="1" height="1" x="7" y="7" rx=".5"></svg:rect><svg:rect width="1" height="1" x="5" y="7" rx=".5"></svg:rect><svg:rect width="1" height="1" x="3" y="7" rx=".5"></svg:rect><svg:rect width="1" height="1" x="9" y="7" rx=".5"></svg:rect><svg:rect width="1" height="1" x="11" y="7" rx=".5"></svg:rect><svg:rect width="1" height="1" x="7" y="9" rx=".5"></svg:rect><svg:rect width="1" height="1" x="7" y="11" rx=".5"></svg:rect></svg:g>`,
})
export class RadixIconsBorderAllIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
