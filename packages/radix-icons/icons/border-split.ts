import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsBorderSplitIcon],svg[radix-icons-border-split-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:rect width="1" height="1" x="7" y="5.025" rx=".5"></svg:rect><svg:rect width="1" height="1" x="7" y="3.025" rx=".5"></svg:rect><svg:rect width="1" height="1" x="7" y="7.025" rx=".5"></svg:rect><svg:rect width="1" height="1" x="7" y="13.025" rx=".5"></svg:rect><svg:rect width="1" height="1" x="7" y="1.025" rx=".5"></svg:rect><svg:rect width="1" height="1" x="13" y="7.025" rx=".5"></svg:rect><svg:rect width="1" height="1" x="5" y="7.025" rx=".5"></svg:rect><svg:rect width="1" height="1" x="3" y="7.025" rx=".5"></svg:rect><svg:rect width="1" height="1" x="9" y="7.025" rx=".5"></svg:rect><svg:rect width="1" height="1" x="11" y="7.025" rx=".5"></svg:rect><svg:rect width="1" height="1" x="7" y="9.025" rx=".5"></svg:rect><svg:rect width="1" height="1" x="7" y="11.025" rx=".5"></svg:rect><svg:rect width="1" height="1" x="1" y="7.025" rx=".5"></svg:rect><svg:path fill-rule="evenodd" d="M1 1.5a.5.5 0 0 1 .5-.5H6v1H2v4H1zM13 2H9V1h4.5a.5.5 0 0 1 .5.5V6h-1zM1 13.5V9h1v4h4v1H1.5a.5.5 0 0 1-.5-.5m12-.5V9h1v4.5a.5.5 0 0 1-.5.5h-4v-1z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class RadixIconsBorderSplitIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
