import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightHttpIcon],svg[material-symbols-light-http-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.73 14.692V9.308h.886v2H5.23v-2h.885v5.384H5.23v-2.5H2.616v2.5zm7.27 0v-4.5H7.308v-.884h4.269v.884H9.885v4.5zm5.116 0v-4.5h-1.693v-.884h4.27v.884H15v4.5zm3.769 0V9.308h2.884q.6 0 1.05.45t.45 1.05v.384q0 .6-.45 1.05t-1.05.45h-2v2zm.884-2.884h2q.231 0 .423-.192q.193-.193.193-.424v-.384q0-.231-.193-.423q-.192-.193-.423-.193h-2z"></svg:path>`,
})
export class MaterialSymbolsLightHttpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
