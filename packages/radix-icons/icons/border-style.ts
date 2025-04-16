import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsBorderStyleIcon],svg[radix-icons-border-style-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 3a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1zM1 7.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m0 4a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0m2 0a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0m2.5-.5a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1m1.5.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0m2.5-.5a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1m1.5.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0m2.5-.5a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1m-7-4a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm4.5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsBorderStyleIcon {
  readonly viewBox = input('0 0 15 15')
  readonly width = input('1em')
  readonly height = input('1em')
}
