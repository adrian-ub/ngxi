import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBoxAlignTopLeftFilledIcon],svg[tabler-box-align-top-left-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 3H5a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m5 0a1 1 0 0 1 .117 1.993L14.99 5a1 1 0 0 1-.117-1.993zm5 0a1 1 0 0 1 .117 1.993L19.99 5a1 1 0 0 1-.117-1.993zm0 5a1 1 0 0 1 .117 1.993L19.99 10a1 1 0 0 1-.117-1.993zm0 6a1 1 0 0 1 .117 1.993L19.99 16a1 1 0 0 1-.117-1.993zM4 14a1 1 0 0 1 .117 1.993L3.99 16a1 1 0 0 1-.117-1.993zm16 5a1 1 0 0 1 .117 1.993L19.99 21a1 1 0 0 1-.117-1.993zm-5 0a1 1 0 0 1 .117 1.993L14.99 21a1 1 0 0 1-.117-1.993zm-6 0a1 1 0 0 1 .117 1.993L8.99 21a1 1 0 0 1-.117-1.993zm-5 0a1 1 0 0 1 .117 1.993L3.99 21a1 1 0 0 1-.117-1.993z"></svg:path>`,
})
export class TablerBoxAlignTopLeftFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
