import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeBarcodeIcon],svg[prime-barcode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 4a1 1 0 0 0-1 1v14a1 1 0 1 0 2 0V5a1 1 0 0 0-1-1m3 0a.5.5 0 0 0-.5.5v15a.5.5 0 0 0 1 0v-15A.5.5 0 0 0 7 4m2.5 0a.5.5 0 0 0-.5.5v15a.5.5 0 0 0 1 0v-15a.5.5 0 0 0-.5-.5m10 .75a.75.75 0 0 1 1.5 0v14.5a.75.75 0 0 1-1.5 0zm-7 .25a1 1 0 1 1 2 0v14a1 1 0 1 1-2 0zM17 4a1 1 0 0 0-1 1v14a1 1 0 1 0 2 0V5a1 1 0 0 0-1-1" clip-rule="evenodd"></svg:path>`,
})
export class PrimeBarcodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
