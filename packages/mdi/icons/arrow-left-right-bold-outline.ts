import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiArrowLeftRightBoldOutlineIcon],svg[mdi-arrow-left-right-bold-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 16v6l10-10L14 2v6h-4V2L0 12l10 10v-6zm-6-2v3l-5-5l5-5v3h8V7l5 5l-5 5v-3z"></svg:path>`,
})
export class MdiArrowLeftRightBoldOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
