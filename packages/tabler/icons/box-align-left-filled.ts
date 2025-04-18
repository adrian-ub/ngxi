import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBoxAlignLeftFilledIcon],svg[tabler-box-align-left-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.002 3.003h-5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h5a1 1 0 0 0 1-1v-16a1 1 0 0 0-1-1m5 16a1 1 0 0 1 .117 1.993l-.127.007a1 1 0 0 1-.117-1.993zm5.001 0a1 1 0 0 1 .117 1.993l-.128.007a1 1 0 0 1-.117-1.993zm0-5.001a1 1 0 0 1 .117 1.993l-.128.007a1 1 0 0 1-.117-1.993zm0-6a1 1 0 0 1 .117 1.993l-.128.007a1 1 0 0 1-.117-1.993zm0-5a1 1 0 0 1 .117 1.993l-.128.007a1 1 0 0 1-.117-1.993zm-5.001 0a1 1 0 0 1 .117 1.993l-.127.007a1 1 0 0 1-.117-1.993z"></svg:path>`,
})
export class TablerBoxAlignLeftFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
