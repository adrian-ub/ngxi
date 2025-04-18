import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashShrinkDiagonalDuotoneIcon],svg[stash-shrink-diagonal-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.768 5.697a1 1 0 0 1 1 1v2.535h2.535a1 1 0 1 1 0 2h-2.758c-.12 0-.262 0-.387-.01a1.5 1.5 0 0 1-.571-.153a1.5 1.5 0 0 1-.656-.656a1.5 1.5 0 0 1-.153-.57a5 5 0 0 1-.01-.388V6.697a1 1 0 0 1 1-1m-4.536 9.07v2.536a1 1 0 0 0 2 0v-2.758c0-.12 0-.262-.01-.387a1.5 1.5 0 0 0-.153-.571a1.5 1.5 0 0 0-.656-.656a1.5 1.5 0 0 0-.57-.153c-.126-.01-.268-.01-.388-.01H6.697a1 1 0 1 0 0 2z"></svg:path>`,
})
export class StashShrinkDiagonalDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
