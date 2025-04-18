import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiScannerIcon],svg[zmdi-scanner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M358 164q11 3 18.5 14.5T384 203v117q0 18-12.5 30.5T341 363H43q-18 0-30.5-12.5T0 320v-85q0-18 12.5-30.5T43 192h268L11 83l15-40zM85 299v-43H43v43zm256 0v-43H128v43z"></svg:path>`,
})
export class ZmdiScannerIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}
