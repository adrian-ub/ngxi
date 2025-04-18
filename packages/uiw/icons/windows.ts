import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uiwWindowsIcon],svg[uiw-windows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20 10.873V20L8.479 18.537l.001-7.664zm-13.12 0l-.001 7.461L0 17.461v-6.588zM20 9.273H8.48l-.001-7.81L20 0zM6.879 1.666l.001 7.607H0V2.539z"></svg:path>`,
})
export class UiwWindowsIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
