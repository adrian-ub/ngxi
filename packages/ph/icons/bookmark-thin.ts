import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBookmarkThinIcon],svg[ph-bookmark-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 36H72a12 12 0 0 0-12 12v176a4 4 0 0 0 6.12 3.39L128 188.72l61.89 38.67a4 4 0 0 0 2.11.61a4.06 4.06 0 0 0 1.94-.5A4 4 0 0 0 196 224V48a12 12 0 0 0-12-12M72 44h112a4 4 0 0 1 4 4v120.78l-57.89-36.17a4 4 0 0 0-4.24 0L68 168.78V48a4 4 0 0 1 4-4m58.11 136.61a4 4 0 0 0-4.24 0L68 216.78v-38.56l60-37.5l60 37.5v38.56Z"></svg:path>`,
})
export class PhBookmarkThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
