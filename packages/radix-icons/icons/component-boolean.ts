import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsComponentBooleanIcon],svg[radix-icons-component-boolean-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.854 1.49a.5.5 0 0 0-.707 0L1.49 7.146a.5.5 0 0 0 0 .708l5.657 5.656a.5.5 0 0 0 .707 0l5.657-5.656a.5.5 0 0 0 0-.708zM7.5 2.55L2.55 7.5l4.95 4.95z" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsComponentBooleanIcon {
  readonly viewBox = input('0 0 15 15')
  readonly width = input('1em')
  readonly height = input('1em')
}
