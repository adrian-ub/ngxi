import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsBorderTopIcon],svg[radix-icons-border-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M14 1.75H1V.25h13z" clip-rule="evenodd"></svg:path><svg:rect width="1" height="1" x="8" y="10" rx=".5" transform="rotate(-180 8 10)"></svg:rect><svg:rect width="1" height="1" x="2" y="10" rx=".5" transform="rotate(-180 2 10)"></svg:rect><svg:rect width="1" height="1" x="8" y="12" rx=".5" transform="rotate(-180 8 12)"></svg:rect><svg:rect width="1" height="1" x="2" y="12" rx=".5" transform="rotate(-180 2 12)"></svg:rect><svg:rect width="1" height="1" x="8" y="8" rx=".5" transform="rotate(-180 8 8)"></svg:rect><svg:rect width="1" height="1" x="8" y="14" rx=".5" transform="rotate(-180 8 14)"></svg:rect><svg:rect width="1" height="1" x="2" y="8" rx=".5" transform="rotate(-180 2 8)"></svg:rect><svg:rect width="1" height="1" x="2" y="14" rx=".5" transform="rotate(-180 2 14)"></svg:rect><svg:rect width="1" height="1" x="10" y="8" rx=".5" transform="rotate(-180 10 8)"></svg:rect><svg:rect width="1" height="1" x="10" y="14" rx=".5" transform="rotate(-180 10 14)"></svg:rect><svg:rect width="1" height="1" x="12" y="8" rx=".5" transform="rotate(-180 12 8)"></svg:rect><svg:rect width="1" height="1" x="12" y="14" rx=".5" transform="rotate(-180 12 14)"></svg:rect><svg:rect width="1" height="1" x="6" y="8" rx=".5" transform="rotate(-180 6 8)"></svg:rect><svg:rect width="1" height="1" x="6" y="14" rx=".5" transform="rotate(-180 6 14)"></svg:rect><svg:rect width="1" height="1" x="4" y="8" rx=".5" transform="rotate(-180 4 8)"></svg:rect><svg:rect width="1" height="1" x="4" y="14" rx=".5" transform="rotate(-180 4 14)"></svg:rect><svg:rect width="1" height="1" x="8" y="6" rx=".5" transform="rotate(-180 8 6)"></svg:rect><svg:rect width="1" height="1" x="2" y="6" rx=".5" transform="rotate(-180 2 6)"></svg:rect><svg:rect width="1" height="1" x="8" y="4" rx=".5" transform="rotate(-180 8 4)"></svg:rect><svg:rect width="1" height="1" x="2" y="4" rx=".5" transform="rotate(-180 2 4)"></svg:rect><svg:rect width="1" height="1" x="14" y="10" rx=".5" transform="rotate(-180 14 10)"></svg:rect><svg:rect width="1" height="1" x="14" y="12" rx=".5" transform="rotate(-180 14 12)"></svg:rect><svg:rect width="1" height="1" x="14" y="8" rx=".5" transform="rotate(-180 14 8)"></svg:rect><svg:rect width="1" height="1" x="14" y="14" rx=".5" transform="rotate(-180 14 14)"></svg:rect><svg:rect width="1" height="1" x="14" y="6" rx=".5" transform="rotate(-180 14 6)"></svg:rect><svg:rect width="1" height="1" x="14" y="4" rx=".5" transform="rotate(-180 14 4)"></svg:rect></svg:g>`,
})
export class RadixIconsBorderTopIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
