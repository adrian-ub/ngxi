import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsBorderRightIcon],svg[radix-icons-border-right-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M13.25 1v13h1.5V1z" clip-rule="evenodd"></svg:path><svg:rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 5 7)"></svg:rect><svg:rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 5 13)"></svg:rect><svg:rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 3 7)"></svg:rect><svg:rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 3 13)"></svg:rect><svg:rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 7 7)"></svg:rect><svg:rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 1 7)"></svg:rect><svg:rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 7 13)"></svg:rect><svg:rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 1 13)"></svg:rect><svg:rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 7 5)"></svg:rect><svg:rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 1 5)"></svg:rect><svg:rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 7 3)"></svg:rect><svg:rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 1 3)"></svg:rect><svg:rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 7 9)"></svg:rect><svg:rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 1 9)"></svg:rect><svg:rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 7 11)"></svg:rect><svg:rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 1 11)"></svg:rect><svg:rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 9 7)"></svg:rect><svg:rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 9 13)"></svg:rect><svg:rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 11 7)"></svg:rect><svg:rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 11 13)"></svg:rect><svg:rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 5 1)"></svg:rect><svg:rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 3 1)"></svg:rect><svg:rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 7 1)"></svg:rect><svg:rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 1 1)"></svg:rect><svg:rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 9 1)"></svg:rect><svg:rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 11 1)"></svg:rect></svg:g>`,
})
export class RadixIconsBorderRightIcon {
  readonly viewBox = input('0 0 15 15')
  readonly width = input('1em')
  readonly height = input('1em')
}
