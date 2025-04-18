import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiArrowLeftBoldIcon],svg[mdi-arrow-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 9v6h-8v4.84L4.16 12L12 4.16V9z"></svg:path>`,
})
export class MdiArrowLeftBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
