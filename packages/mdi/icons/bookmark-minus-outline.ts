import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBookmarkMinusOutlineIcon],svg[mdi-bookmark-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 11V9h6v2zm10-6v16l-7-3l-7 3V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2m-2 0H7v13l5-2.18L17 18z"></svg:path>`,
})
export class MdiBookmarkMinusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
