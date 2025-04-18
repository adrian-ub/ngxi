import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSettingsBluetoothRoundedIcon],svg[material-symbols-light-settings-bluetooth-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.5 11.208l-4.746 4.746q-.14.14-.344.15t-.364-.15t-.16-.354t.16-.354L11.292 10L6.046 4.754q-.14-.14-.15-.344t.15-.364t.354-.16t.354.16L11.5 8.792V2.137q0-.374.252-.594t.556-.22q.142 0 .288.056q.146.055.277.186l3.57 3.57q.13.13.183.267q.053.136.053.298t-.053.298t-.184.267L12.708 10l3.734 3.735q.131.13.184.267t.053.298t-.053.298t-.184.268l-3.569 3.569q-.13.13-.277.186q-.146.056-.288.056q-.304 0-.556-.22t-.252-.594zm1 6.173l3.092-3.081l-3.092-3.092zm0-8.589L15.592 5.7L12.5 2.62zM8 23.77q-.31 0-.54-.23T7.23 23t.23-.54t.54-.23t.54.23t.23.54t-.23.54t-.54.23m4 0q-.31 0-.54-.23t-.23-.54t.23-.54t.54-.23t.54.23t.23.54t-.23.54t-.54.23m4 0q-.31 0-.54-.23t-.23-.54t.23-.54t.54-.23t.54.23t.23.54t-.23.54t-.54.23"></svg:path>`,
})
export class MaterialSymbolsLightSettingsBluetoothRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
