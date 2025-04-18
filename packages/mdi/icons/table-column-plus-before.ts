import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTableColumnPlusBeforeIcon],svg[mdi-table-column-plus-before-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h9V2zm7 8v4h-7v-4zm0 6v4h-7v-4zm0-12v4h-7V4zM9 11H6V8H4v3H1v2h3v3h2v-3h3z"></svg:path>`,
})
export class MdiTableColumnPlusBeforeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
