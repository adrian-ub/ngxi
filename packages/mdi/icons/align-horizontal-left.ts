import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiAlignHorizontalLeftIcon],svg[mdi-align-horizontal-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 22H2V2h2zM22 7H6v3h16zm-6 7H6v3h10z"></svg:path>`,
})
export class MdiAlignHorizontalLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
