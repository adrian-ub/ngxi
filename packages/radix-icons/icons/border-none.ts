import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsBorderNoneIcon],svg[radix-icons-border-none-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:rect width="1" height="1" x="7" y="5.025" rx=".5"></svg:rect><svg:rect width="1" height="1" x="13" y="5.025" rx=".5"></svg:rect><svg:rect width="1" height="1" x="7" y="3.025" rx=".5"></svg:rect><svg:rect width="1" height="1" x="13" y="3.025" rx=".5"></svg:rect><svg:rect width="1" height="1" x="7" y="7.025" rx=".5"></svg:rect><svg:rect width="1" height="1" x="7" y="13.025" rx=".5"></svg:rect><svg:rect width="1" height="1" x="7" y="1.025" rx=".5"></svg:rect><svg:rect width="1" height="1" x="13" y="7.025" rx=".5"></svg:rect><svg:rect width="1" height="1" x="13" y="13.025" rx=".5"></svg:rect><svg:rect width="1" height="1" x="13" y="1.025" rx=".5"></svg:rect><svg:rect width="1" height="1" x="5" y="7.025" rx=".5"></svg:rect><svg:rect width="1" height="1" x="5" y="13.025" rx=".5"></svg:rect><svg:rect width="1" height="1" x="5" y="1.025" rx=".5"></svg:rect><svg:rect width="1" height="1" x="3" y="7.025" rx=".5"></svg:rect><svg:rect width="1" height="1" x="3" y="13.025" rx=".5"></svg:rect><svg:rect width="1" height="1" x="3" y="1.025" rx=".5"></svg:rect><svg:rect width="1" height="1" x="9" y="7.025" rx=".5"></svg:rect><svg:rect width="1" height="1" x="9" y="13.025" rx=".5"></svg:rect><svg:rect width="1" height="1" x="9" y="1.025" rx=".5"></svg:rect><svg:rect width="1" height="1" x="11" y="7.025" rx=".5"></svg:rect><svg:rect width="1" height="1" x="11" y="13.025" rx=".5"></svg:rect><svg:rect width="1" height="1" x="11" y="1.025" rx=".5"></svg:rect><svg:rect width="1" height="1" x="7" y="9.025" rx=".5"></svg:rect><svg:rect width="1" height="1" x="13" y="9.025" rx=".5"></svg:rect><svg:rect width="1" height="1" x="7" y="11.025" rx=".5"></svg:rect><svg:rect width="1" height="1" x="13" y="11.025" rx=".5"></svg:rect><svg:rect width="1" height="1" x="1" y="5.025" rx=".5"></svg:rect><svg:rect width="1" height="1" x="1" y="3.025" rx=".5"></svg:rect><svg:rect width="1" height="1" x="1" y="7.025" rx=".5"></svg:rect><svg:rect width="1" height="1" x="1" y="13.025" rx=".5"></svg:rect><svg:rect width="1" height="1" x="1" y="1.025" rx=".5"></svg:rect><svg:rect width="1" height="1" x="1" y="9.025" rx=".5"></svg:rect><svg:rect width="1" height="1" x="1" y="11.025" rx=".5"></svg:rect></svg:g>`,
})
export class RadixIconsBorderNoneIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
