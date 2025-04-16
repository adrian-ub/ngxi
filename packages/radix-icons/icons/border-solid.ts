import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsBorderSolidIcon],svg[radix-icons-border-solid-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.25 7.5a.5.5 0 0 1 .5-.5h11.5a.5.5 0 0 1 0 1H1.75a.5.5 0 0 1-.5-.5" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsBorderSolidIcon {
  readonly viewBox = input('0 0 15 15')
  readonly width = input('1em')
  readonly height = input('1em')
}
