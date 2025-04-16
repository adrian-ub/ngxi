import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsMagnifyingGlassIcon],svg[radix-icons-magnifying-glass-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 6.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0m-.691 3.516a4.5 4.5 0 1 1 .707-.707l2.838 2.837a.5.5 0 0 1-.708.708z" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsMagnifyingGlassIcon {
  readonly viewBox = input('0 0 15 15')
  readonly width = input('1em')
  readonly height = input('1em')
}
