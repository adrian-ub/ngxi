import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTableAddIcon],svg[tdesign-table-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm2 2v2h16V4zm16 4H4v12h16zm-7 2v3h3v2h-3v3h-2v-3H8v-2h3v-3z"></svg:path>`,
})
export class TdesignTableAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
