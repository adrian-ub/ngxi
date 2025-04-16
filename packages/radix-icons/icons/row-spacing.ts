import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsRowSpacingIcon],svg[radix-icons-row-spacing-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.818.682a.45.45 0 0 0-.636 0l-2 2a.45.45 0 0 0 .636.636L7.05 2.086V5.5a.45.45 0 1 0 .9 0V2.086l1.232 1.232a.45.45 0 0 0 .636-.636zm.132 12.232V9.5a.45.45 0 1 0-.9 0v3.414l-1.232-1.232a.45.45 0 0 0-.636.636l2 2a.45.45 0 0 0 .636 0l2-2a.45.45 0 1 0-.636-.636zM1.5 7a.5.5 0 0 0 0 1h12a.5.5 0 1 0 0-1z" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsRowSpacingIcon {
  readonly viewBox = input('0 0 15 15')
  readonly width = input('1em')
  readonly height = input('1em')
}
