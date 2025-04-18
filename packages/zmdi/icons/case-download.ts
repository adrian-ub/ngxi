import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiCaseDownloadIcon],svg[zmdi-case-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 91q18 0 30.5 12.5T427 133v235q0 18-12.5 30.5T384 411H43q-18 0-30.5-12.5T0 368V133q0-17 12.5-29.5T43 91h85V48l43-43h85l43 43v43zM171 48v43h85V48zm42 320l107-107h-64v-85h-85v85h-64z"></svg:path>`,
})
export class ZmdiCaseDownloadIcon {
  readonly viewBox = input("0 0 432 416")
  readonly width = input("1.04em")
  readonly height = input("1em")
}
