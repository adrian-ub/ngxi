import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiTableAddColumnAfterLtrIcon],svg[ooui-table-add-column-after-ltr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 3v14h8v1h12V2H8v1zm10 6h3V6h2v3h3v2h-3v3h-2v-3h-3zM6 5h2v10H6zM2 5h2v10H2z"></svg:path>`,
})
export class OouiTableAddColumnAfterLtrIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
