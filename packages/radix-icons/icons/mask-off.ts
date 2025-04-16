import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsMaskOffIcon],svg[radix-icons-mask-off-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 2h13v11H1zM0 2a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm4.875 5.5a2.625 2.625 0 1 1 5.25 0a2.625 2.625 0 0 1-5.25 0M7.5 3.875a3.625 3.625 0 1 0 0 7.25a3.625 3.625 0 0 0 0-7.25" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsMaskOffIcon {
  readonly viewBox = input('0 0 15 15')
  readonly width = input('1em')
  readonly height = input('1em')
}
