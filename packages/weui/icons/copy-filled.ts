import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[weuiCopyFilledIcon],svg[weui-copy-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.6 3.299V8c0 .22.18.4.4.4h4.703zM5.996 2h8.002L20 8v13.001a.996.996 0 0 1-.996.999H5.996A1 1 0 0 1 5 21.001V3c0-.554.446-1 .996-1"></svg:path>`,
})
export class WeuiCopyFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
