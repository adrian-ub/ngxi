import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsAlignCenterIcon],svg[radix-icons-align-center-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M6 7.05V4h3v3.05H6zm-1 0H1.5a.45.45 0 0 0 0 .9H5v3.3c0 .414.336.75.75.75h3.5a.75.75 0 0 0 .75-.75v-3.3h3.5a.45.45 0 0 0 0-.9H10v-3.3A.75.75 0 0 0 9.25 3h-3.5a.75.75 0 0 0-.75.75v3.3zm4 .9V11H6V7.95h3z" fill="currentColor"></svg:path></svg:g>`,
})
export class RadixIconsAlignCenterIcon {
  readonly viewBox = input('0 0 15 15')
  readonly width = input('1em')
  readonly height = input('1em')
}
