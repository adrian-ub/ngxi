import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsSewingPinFilledIcon],svg[radix-icons-sewing-pin-filled-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 3.5a2.5 2.5 0 0 1-2 2.45v7.55a.5.5 0 0 1-1 0V5.95a2.5 2.5 0 1 1 3-2.45" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsSewingPinFilledIcon {
  readonly viewBox = input('0 0 15 15')
  readonly width = input('1em')
  readonly height = input('1em')
}
