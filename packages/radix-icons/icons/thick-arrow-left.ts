import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsThickArrowLeftIcon],svg[radix-icons-thick-arrow-left-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 7.5a.5.5 0 0 0 .21.407l7 5A.5.5 0 0 0 9 12.5V10h2.5a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5H9V2.5a.5.5 0 0 0-.79-.407l-7 5A.5.5 0 0 0 1 7.5m7-4.028V5.5a.5.5 0 0 0 .5.5H11v3H8.5a.5.5 0 0 0-.5.5v2.028L2.36 7.5z" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsThickArrowLeftIcon {
  readonly viewBox = input('0 0 15 15')
  readonly width = input('1em')
  readonly height = input('1em')
}
