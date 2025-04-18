import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilHttpsIcon],svg[cil-https-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M400 200h-12v-56a128 128 0 0 0-256 0v56h-12a24.03 24.03 0 0 0-24 24v248a24.03 24.03 0 0 0 24 24h280a24.03 24.03 0 0 0 24-24V224a24.03 24.03 0 0 0-24-24m-236-56a96 96 0 0 1 192 0v56H164Zm228 320H128V232h264Z"></svg:path><svg:path fill="currentColor" d="M240 328h40v40h-40z"></svg:path>`,
})
export class CilHttpsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
