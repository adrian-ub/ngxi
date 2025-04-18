import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightSquareIcon],svg[mdi-light-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4h17v17H3zm1 1v15h15V5z"></svg:path>`,
})
export class MdiLightSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
