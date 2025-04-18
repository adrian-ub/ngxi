import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonToolBoxIcon],svg[carbon-tool-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 9h-3V6a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2v3H5a3 3 0 0 0-3 3v14a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V12a3 3 0 0 0-3-3M10 6h12v3H10Zm18 20H4v-9h8v5h8v-5h8Zm-14-9h4v3h-4ZM4 15v-3a1 1 0 0 1 1-1h22a1 1 0 0 1 1 1v3Z"></svg:path>`,
})
export class CarbonToolBoxIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
