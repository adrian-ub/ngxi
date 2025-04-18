import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCrownIcon],svg[pepicons-pop-crown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="m15.267 9.928l-.367.234a3 3 0 0 1-4.107-.867L10 8.105l-.793 1.19a3 3 0 0 1-4.107.867l-.367-.234L5.542 13h8.916zM3.654 6.87c-.768-.488-1.736.219-1.504 1.099l1.654 6.286A1 1 0 0 0 4.77 15h10.458a1 1 0 0 0 .967-.745l1.654-6.286c.232-.88-.736-1.587-1.504-1.099l-2.52 1.604a1 1 0 0 1-1.369-.289l-1.625-2.437a1 1 0 0 0-1.664 0L7.543 8.185a1 1 0 0 1-1.369.29z" clip-rule="evenodd"></svg:path><svg:path d="M11 3.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m8 2a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-16 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill-rule="evenodd" d="M4.5 16.25a1 1 0 0 1 1-1h9.251a1 1 0 1 1 0 2H5.5a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopCrownIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
