import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsThickArrowRightIcon],svg[radix-icons-thick-arrow-right-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 7.5a.5.5 0 0 1-.21.407l-7 5A.5.5 0 0 1 6 12.5V10H3.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5H6V2.5a.5.5 0 0 1 .79-.407l7 5A.5.5 0 0 1 14 7.5M7 3.472V5.5a.5.5 0 0 1-.5.5H4v3h2.5a.5.5 0 0 1 .5.5v2.028L12.64 7.5z" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsThickArrowRightIcon {
  readonly viewBox = input('0 0 15 15')
  readonly width = input('1em')
  readonly height = input('1em')
}
