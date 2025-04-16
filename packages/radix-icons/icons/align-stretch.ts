import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsAlignStretchIcon],svg[radix-icons-align-stretch-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M1.05 1.5a.45.45 0 0 1 .45-.45h12a.45.45 0 0 1 0 .9h-12a.45.45 0 0 1-.45-.45zm0 12a.45.45 0 0 1 .45-.45h12a.45.45 0 0 1 0 .9h-12a.45.45 0 0 1-.45-.45zM6 11V4h3v7H6zM5 3.75A.75.75 0 0 1 5.75 3h3.5a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75h-3.5a.75.75 0 0 1-.75-.75v-7.5z" fill="currentColor"></svg:path></svg:g>`,
})
export class RadixIconsAlignStretchIcon {
  readonly viewBox = input('0 0 15 15')
  readonly width = input('1em')
  readonly height = input('1em')
}
