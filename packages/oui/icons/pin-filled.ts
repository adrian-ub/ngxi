import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiPinFilledIcon],svg[oui-pin-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 11h4.5a.5.5 0 1 0 0-1h-10a.5.5 0 1 0 0 1H8v4.25c0 .414.224.75.5.75s.5-.336.5-.75zM5 4h7v6H5zm.286-3h6.428C12.424 1 13 1.448 13 2v1c0 .552-.576 1-1.286 1H5.286C4.576 4 4 3.552 4 3V2c0-.552.576-1 1.286-1"></svg:path>`,
})
export class OuiPinFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
