import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTableColumnPlusAfterIcon],svg[mdi-table-column-plus-after-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H2V2zm-7 8v4h7v-4zm0 6v4h7v-4zM4 4v4h7V4zm11 7h3V8h2v3h3v2h-3v3h-2v-3h-3z"></svg:path>`,
})
export class MdiTableColumnPlusAfterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
