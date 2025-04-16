import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsBorderBottomIcon],svg[radix-icons-border-bottom-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M1 13.25h13v1.5H1z" clip-rule="evenodd"></svg:path><svg:rect width="1" height="1" x="7" y="5" rx=".5"></svg:rect><svg:rect width="1" height="1" x="13" y="5" rx=".5"></svg:rect><svg:rect width="1" height="1" x="7" y="3" rx=".5"></svg:rect><svg:rect width="1" height="1" x="13" y="3" rx=".5"></svg:rect><svg:rect width="1" height="1" x="7" y="7" rx=".5"></svg:rect><svg:rect width="1" height="1" x="7" y="1" rx=".5"></svg:rect><svg:rect width="1" height="1" x="13" y="7" rx=".5"></svg:rect><svg:rect width="1" height="1" x="13" y="1" rx=".5"></svg:rect><svg:rect width="1" height="1" x="5" y="7" rx=".5"></svg:rect><svg:rect width="1" height="1" x="5" y="1" rx=".5"></svg:rect><svg:rect width="1" height="1" x="3" y="7" rx=".5"></svg:rect><svg:rect width="1" height="1" x="3" y="1" rx=".5"></svg:rect><svg:rect width="1" height="1" x="9" y="7" rx=".5"></svg:rect><svg:rect width="1" height="1" x="9" y="1" rx=".5"></svg:rect><svg:rect width="1" height="1" x="11" y="7" rx=".5"></svg:rect><svg:rect width="1" height="1" x="11" y="1" rx=".5"></svg:rect><svg:rect width="1" height="1" x="7" y="9" rx=".5"></svg:rect><svg:rect width="1" height="1" x="13" y="9" rx=".5"></svg:rect><svg:rect width="1" height="1" x="7" y="11" rx=".5"></svg:rect><svg:rect width="1" height="1" x="13" y="11" rx=".5"></svg:rect><svg:rect width="1" height="1" x="1" y="5" rx=".5"></svg:rect><svg:rect width="1" height="1" x="1" y="3" rx=".5"></svg:rect><svg:rect width="1" height="1" x="1" y="7" rx=".5"></svg:rect><svg:rect width="1" height="1" x="1" y="1" rx=".5"></svg:rect><svg:rect width="1" height="1" x="1" y="9" rx=".5"></svg:rect><svg:rect width="1" height="1" x="1" y="11" rx=".5"></svg:rect></svg:g>`,
})
export class RadixIconsBorderBottomIcon {
  readonly viewBox = input('0 0 15 15')
  readonly width = input('1em')
  readonly height = input('1em')
}
