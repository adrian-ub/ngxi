import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFileExcelFilledIcon],svg[tdesign-file-excel-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1h10v8h8v14H3zm12 12.647V12h-2v1.646l-1 .965l-1-.965V12H9v1.646a2 2 0 0 0 .612 1.44l.947.914l-.947.914A2 2 0 0 0 9 18.354V20h2v-1.646l1-.965l1 .965V20h2v-1.646a2 2 0 0 0-.612-1.44L13.441 16l.947-.914a2 2 0 0 0 .612-1.44"></svg:path><svg:path fill="currentColor" d="M21 6.586V7h-6V1h.414z"></svg:path>`,
})
export class TdesignFileExcelFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
