import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonTableAliasIcon],svg[carbon-table-alias-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 29H5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2m-7-9v7h7v-7Z"></svg:path><svg:path fill="currentColor" d="M27 3H5a2 2 0 0 0-2 2v10h2v-4h10v4h2v-4h10v7H17v2h10v7H17v2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 6H5V5h22Z"></svg:path>`,
})
export class CarbonTableAliasIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
