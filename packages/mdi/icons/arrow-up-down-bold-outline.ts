import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiArrowUpDownBoldOutlineIcon],svg[mdi-arrow-up-down-bold-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 10h6L12 0L2 10h6v4H2l10 10l10-10h-6zm-2 6h3l-5 5l-5-5h3V8H7l5-5l5 5h-3z"></svg:path>`,
})
export class MdiArrowUpDownBoldOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
