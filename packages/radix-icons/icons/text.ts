import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsTextIcon],svg[radix-icons-text-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.95 2.95V4.5a.45.45 0 0 1-.9 0v-2a.45.45 0 0 1 .45-.45h8a.45.45 0 0 1 .45.45v2a.45.45 0 1 1-.9 0V2.95h-3v9.1h1.204a.45.45 0 0 1 0 .9h-3.5a.45.45 0 1 1 0-.9H6.95v-9.1z" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsTextIcon {
  readonly viewBox = input('0 0 15 15')
  readonly width = input('1em')
  readonly height = input('1em')
}
