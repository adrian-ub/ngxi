import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightElevationRoundedIcon],svg[material-symbols-light-elevation-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.077 19.192H5.269q-.49 0-.724-.431q-.234-.432.059-.836l3.604-5.062q.217-.322.575-.497q.358-.174.742-.174h3.89q.135 0 .25-.057q.116-.058.212-.154l4.392-5.131q.373-.429.898-.23t.525.765v10.192q0 .671-.472 1.143t-1.143.472M7.289 9.808l-3.273 4.586q-.116.177-.314.201t-.375-.091t-.201-.313t.091-.376l3.087-4.33q.217-.323.575-.5t.742-.177h4.198l4.185-4.898q.14-.172.338-.177q.199-.006.37.134t.186.33q.016.187-.125.359l-4.03 4.686q-.218.273-.532.42q-.313.146-.68.146z"></svg:path>`,
})
export class MaterialSymbolsLightElevationRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
