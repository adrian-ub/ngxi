import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBoxAlignTopRightFilledIcon],svg[tabler-box-align-top-right-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3.01h-5a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2M20 14a1 1 0 0 1 .993.883l.007.127a1 1 0 0 1-1.993.117L19 15a1 1 0 0 1 1-1m0 5a1 1 0 0 1 .993.883l.007.127a1 1 0 0 1-1.993.117L19 20a1 1 0 0 1 1-1m-5 0a1 1 0 0 1 .993.883l.007.127a1 1 0 0 1-1.993.117L14 20a1 1 0 0 1 1-1m-6 0a1 1 0 0 1 .993.883l.007.127a1 1 0 0 1-1.993.117L8 20a1 1 0 0 1 1-1M9 3a1 1 0 0 1 .993.883L10 4.01a1 1 0 0 1-1.993.117L8 4a1 1 0 0 1 1-1M4 19a1 1 0 0 1 .993.883L5 20.01a1 1 0 0 1-1.993.117L3 20a1 1 0 0 1 1-1m0-5a1 1 0 0 1 .993.883L5 15.01a1 1 0 0 1-1.993.117L3 15a1 1 0 0 1 1-1m0-6a1 1 0 0 1 .993.883L5 9.01a1 1 0 0 1-1.993.117L3 9a1 1 0 0 1 1-1m0-5a1 1 0 0 1 .993.883L5 4.01a1 1 0 0 1-1.993.117L3 4a1 1 0 0 1 1-1"></svg:path>`,
})
export class TablerBoxAlignTopRightFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
