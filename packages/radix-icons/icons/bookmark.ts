import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsBookmarkIcon],svg[radix-icons-bookmark-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 2.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.765.424L7.5 11.59l-3.735 2.334A.5.5 0 0 1 3 13.5zM4 3v9.598l2.97-1.856a1 1 0 0 1 1.06 0L11 12.598V3z" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsBookmarkIcon {
  readonly viewBox = input('0 0 15 15')
  readonly width = input('1em')
  readonly height = input('1em')
}
