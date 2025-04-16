import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsViewGridIcon],svg[radix-icons-view-grid-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 2H1.5a.5.5 0 0 0-.5.5V7h6zm1 0v5h6V2.5a.5.5 0 0 0-.5-.5zM7 8H1v4.5a.5.5 0 0 0 .5.5H7zm1 5V8h6v4.5a.5.5 0 0 1-.5.5zM1.5 1A1.5 1.5 0 0 0 0 2.5v10A1.5 1.5 0 0 0 1.5 14h12a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1z" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsViewGridIcon {
  readonly viewBox = input('0 0 15 15')
  readonly width = input('1em')
  readonly height = input('1em')
}
