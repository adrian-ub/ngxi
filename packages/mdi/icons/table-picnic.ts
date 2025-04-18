import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTablePicnicIcon],svg[mdi-table-picnic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6h16v3h-2l.22 2H23v2h-4.56l.56 5h-2.5l-.56-5H8.06l-.56 5H5l.56-5H1v-2h4.78L6 9H4m11.5 0h-7l-.21 2h7.42Z"></svg:path>`,
})
export class MdiTablePicnicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
