import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsTextAlignTopIcon],svg[radix-icons-text-align-top-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.9 9.5a.4.4 0 0 1-.8 0V2.466L1.781 3.783a.4.4 0 0 1-.565-.566l2-2a.4.4 0 0 1 .565 0l2 2a.4.4 0 0 1-.565.566L3.899 2.466zM8.5 2a.5.5 0 1 0 0 1h6a.5.5 0 0 0 0-1zm0 3a.5.5 0 1 0 0 1h6a.5.5 0 0 0 0-1zM8 8.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsTextAlignTopIcon {
  readonly viewBox = input('0 0 15 15')
  readonly width = input('1em')
  readonly height = input('1em')
}
