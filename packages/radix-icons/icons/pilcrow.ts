import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsPilcrowIcon],svg[radix-icons-pilcrow-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 5.5C3 7.983 4.992 9 7 9v3.5a.5.5 0 0 0 1 0V3.1h1v9.4a.5.5 0 0 0 1 0V3.1h1.5a.55.55 0 1 0 0-1.1H7C4.992 2 3 3.017 3 5.5" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsPilcrowIcon {
  readonly viewBox = input('0 0 15 15')
  readonly width = input('1em')
  readonly height = input('1em')
}
