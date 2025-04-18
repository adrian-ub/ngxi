import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFlashlightOffIcon],svg[material-symbols-flashlight-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 22V10.8L1.4 4.2l1.4-1.4l18.4 18.4l-1.4 1.4l-3.8-3.8V22zM6 3.15V2h12v3H7.85zm10 10L9.85 7H18v1l-2 3z"></svg:path>`,
})
export class MaterialSymbolsFlashlightOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
