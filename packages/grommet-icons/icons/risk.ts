import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsRiskIcon],svg[grommet-icons-risk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M14 10h1V9h-1zm4 0h1V9h-1zm0-4h1V5h-1zm-4 0h1V5h-1zM9 19h1v-1H9zm-4-4h1v-1H5zm5-5H1v13h13v-9m-4 0h13V1H10z"></svg:path>`,
})
export class GrommetIconsRiskIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
