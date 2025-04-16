import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsPauseIcon],svg[radix-icons-pause-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.05 2.75a.55.55 0 0 0-1.1 0v9.5a.55.55 0 0 0 1.1 0zm4 0a.55.55 0 0 0-1.1 0v9.5a.55.55 0 0 0 1.1 0z" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsPauseIcon {
  readonly viewBox = input('0 0 15 15')
  readonly width = input('1em')
  readonly height = input('1em')
}
