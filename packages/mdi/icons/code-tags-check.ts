import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCodeTagsCheckIcon],svg[mdi-code-tags-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.59 3.41L2 8l4.59 4.6L8 11.18L4.82 8L8 4.82zm5.82 0L11 4.82L14.18 8L11 11.18l1.41 1.42L17 8zm9.18 8.18l-8.09 8.09L9.83 16l-1.41 1.41l5.08 5.09L23 13z"></svg:path>`,
})
export class MdiCodeTagsCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
