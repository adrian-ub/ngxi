import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFileExcelIcon],svg[tdesign-file-excel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1h12.414L21 6.586V23H3zm2 2v18h14V9h-6V3zm10 .414V7h3.586zM15 10v1.646a2 2 0 0 1-.612 1.44l-.947.914l.947.914a2 2 0 0 1 .612 1.44V18h-2v-1.646l-1-.965l-1 .965V18H9v-1.646a2 2 0 0 1 .612-1.44l.947-.914l-.947-.914A2 2 0 0 1 9 11.646V10h2v1.646l1 .965l1-.965V10z"></svg:path>`,
})
export class TdesignFileExcelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
