import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilBoldIcon],svg[cil-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 496h480V16H16ZM48 48h416v416H48Z"></svg:path><svg:path fill="currentColor" d="M341.6 242.986A79.956 79.956 0 0 0 280 112H112v32h40v224h-40v32h208a79.991 79.991 0 0 0 21.6-157.014M208 144h48a48 48 0 0 1 0 96h-48Zm88 224h-88v-96h88a48 48 0 0 1 0 96"></svg:path>`,
})
export class CilBoldIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
