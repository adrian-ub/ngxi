import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsMarginIcon],svg[radix-icons-margin-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 2a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m3 0a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1M8 1.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0m2.5.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m3.5-.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0M1.5 14a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m.5-3.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0M1.5 8a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1M2 4.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0M13.5 11a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m.5-3.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0M13.5 5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1M5 13.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0m2.5.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m3.5-.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0m2.5.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1M4 5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm1 0h5v5H5z" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsMarginIcon {
  readonly viewBox = input('0 0 15 15')
  readonly width = input('1em')
  readonly height = input('1em')
}
