import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiGridIcon],svg[oui-grid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 5V1h4v4zm3-1V2H2v2zm2 1V1h4v4zm3-1V2H7v2zm2 1V1h4v4zm1-1h2V2h-2zM1 10V6h4v4zm3-1V7H2v2zm2 1V6h4v4zm3-1V7H7v2zm2 1V6h4v4zm3-1V7h-2v2zM1 15v-4h4v4zm1-1h2v-2H2zm4 1v-4h4v4zm1-1h2v-2H7zm4 1v-4h4v4zm1-1h2v-2h-2z"></svg:path>`,
})
export class OuiGridIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
