import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBoxAlignRightFilledIcon],svg[tabler-box-align-right-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.998 3.003h-5a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h5a2 2 0 0 0 2-2v-14a2 2 0 0 0-2-2m-9.99 16a1 1 0 0 1 .117 1.993l-.127.007a1 1 0 0 1-.117-1.993zm-5 0a1 1 0 0 1 .117 1.993l-.128.007a1 1 0 0 1-.117-1.993zm0-5.001a1 1 0 0 1 .117 1.993l-.128.007a1 1 0 0 1-.117-1.993zm0-6a1 1 0 0 1 .117 1.993l-.128.007a1 1 0 0 1-.117-1.993zm0-5a1 1 0 0 1 .117 1.993l-.128.007a1 1 0 0 1-.117-1.993zm5 0a1 1 0 0 1 .117 1.993l-.127.007a1 1 0 0 1-.117-1.993z"></svg:path>`,
})
export class TablerBoxAlignRightFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
