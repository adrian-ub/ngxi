import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiPinIcon],svg[oui-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 11h4.5a.5.5 0 1 0 0-1h-10a.5.5 0 0 0 0 1H7v4.25c0 .414.224.75.5.75s.5-.336.5-.75zM4 4h1v6H4zm6 0h1v6h-1zM4.286 2C4.08 2 4 2.063 4 2v1c0-.063.08 0 .286 0h6.428C10.92 3 11 2.937 11 3V2c0 .063-.08 0-.286 0zm0-1h6.428C11.424 1 12 1.448 12 2v1c0 .552-.576 1-1.286 1H4.286C3.576 4 3 3.552 3 3V2c0-.552.576-1 1.286-1"></svg:path>`,
})
export class OuiPinIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
