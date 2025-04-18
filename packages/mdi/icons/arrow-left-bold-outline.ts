import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiArrowLeftBoldOutlineIcon],svg[mdi-arrow-left-bold-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 22L3 12L13 2v6h8v8h-8zM6 12l5 5v-3h8v-4h-8V7z"></svg:path>`,
})
export class MdiArrowLeftBoldOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
