import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilBrowserIcon],svg[cil-browser-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M472 40H40a24.03 24.03 0 0 0-24 24v384a24.03 24.03 0 0 0 24 24h432a24.03 24.03 0 0 0 24-24V64a24.03 24.03 0 0 0-24-24M48 72h96v72H48Zm416 368H48V176h416Zm0-296H176V72h288Z"></svg:path>`,
})
export class CilBrowserIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
