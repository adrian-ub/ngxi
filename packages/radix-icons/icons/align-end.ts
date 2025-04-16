import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsAlignEndIcon],svg[radix-icons-align-end-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M6 11V4h3v7H6zM5 3.75A.75.75 0 0 1 5.75 3h3.5a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75h-3.5a.75.75 0 0 1-.75-.75v-7.5zm-3.5 9.3a.45.45 0 0 0 0 .9h12a.45.45 0 1 0 0-.9h-12z" fill="currentColor"></svg:path></svg:g>`,
})
export class RadixIconsAlignEndIcon {
  readonly viewBox = input('0 0 15 15')
  readonly width = input('1em')
  readonly height = input('1em')
}
