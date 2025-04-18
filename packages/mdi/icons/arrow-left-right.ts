import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiArrowLeftRightIcon],svg[mdi-arrow-left-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.45 17.45L1 12l5.45-5.45l1.41 1.41L4.83 11h14.34l-3.03-3.04l1.41-1.41L23 12l-5.45 5.45l-1.41-1.41L19.17 13H4.83l3.03 3.04z"></svg:path>`,
})
export class MdiArrowLeftRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
