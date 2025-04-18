import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFlashlightOffOutlineIcon],svg[material-symbols-flashlight-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.8 22.6L16 18.8V22H8V10.8L1.4 4.2l1.4-1.4l18.4 18.4zM10 20h4v-3.2l-4-4zm6-6.85l-2-2v-.75l2-3V7H9.85l-2-2H16V4H6.85L6 3.15V2h12v6l-2 3zm-3.575-3.575"></svg:path>`,
})
export class MaterialSymbolsFlashlightOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
