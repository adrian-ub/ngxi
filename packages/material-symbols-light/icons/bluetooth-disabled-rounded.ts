import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBluetoothDisabledRoundedIcon],svg[material-symbols-light-bluetooth-disabled-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.5 13.208l-4.746 4.746q-.14.14-.344.15t-.364-.15t-.16-.354t.16-.354l5.085-5.085L3.369 4.4q-.14-.14-.15-.344t.15-.364t.354-.16t.354.16L21.423 21.04q.14.14.15.344t-.15.363t-.354.16t-.354-.16L16.14 17.17l-3.266 3.265q-.13.131-.277.187q-.146.056-.288.056q-.304 0-.556-.22t-.252-.593zm1 6.173l2.92-2.92l-2.92-2.919zm1.33-8.504l-.707-.708l2.47-2.469L12.5 4.62v4.926l-1-1v-4.41q0-.372.252-.593t.556-.22q.142 0 .288.056t.277.187l3.57 3.569q.13.13.183.267t.053.298t-.053.298t-.184.268z"></svg:path>`,
})
export class MaterialSymbolsLightBluetoothDisabledRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
