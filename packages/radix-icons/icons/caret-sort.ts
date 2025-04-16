import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsCaretSortIcon],svg[radix-icons-caret-sort-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.932 5.432a.45.45 0 1 0 .636.636L7.5 4.136l1.932 1.932a.45.45 0 0 0 .636-.636l-2.25-2.25a.45.45 0 0 0-.636 0zm5.136 4.136a.45.45 0 0 0-.636-.636L7.5 10.864L5.568 8.932a.45.45 0 0 0-.636.636l2.25 2.25a.45.45 0 0 0 .636 0z" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsCaretSortIcon {
  readonly viewBox = input('0 0 15 15')
  readonly width = input('1em')
  readonly height = input('1em')
}
