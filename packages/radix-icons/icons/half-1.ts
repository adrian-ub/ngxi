import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsHalf1Icon],svg[radix-icons-half-1-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5.877a6.623 6.623 0 1 0 0 13.246A6.623 6.623 0 0 0 7.5.877m-.5.972A5.673 5.673 0 0 0 7 13.15zM8 13.15A5.673 5.673 0 0 0 8 1.849z" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsHalf1Icon {
  readonly viewBox = input('0 0 15 15')
  readonly width = input('1em')
  readonly height = input('1em')
}
