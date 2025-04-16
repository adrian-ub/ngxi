import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsDotFilledIcon],svg[radix-icons-dot-filled-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.875 7.5a2.375 2.375 0 1 1-4.75 0a2.375 2.375 0 0 1 4.75 0"></svg:path>`,
})
export class RadixIconsDotFilledIcon {
  readonly viewBox = input('0 0 15 15')
  readonly width = input('1em')
  readonly height = input('1em')
}
