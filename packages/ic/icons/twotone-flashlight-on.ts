import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneFlashlightOnIcon],svg[ic-twotone-flashlight-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8 7.39l2 3V20h4v-9.6l2-3.01V7H8zm4 5.11c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5M8 4h8v1H8z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M6 2v6l2 3v11h8V11l2-3V2zm10 5.39l-2 3.01V20h-4v-9.61l-2-3V7h8zM16 5H8V4h8z"></svg:path><svg:circle cx="12" cy="14" r="1.5" fill="currentColor"></svg:circle>`,
})
export class IcTwotoneFlashlightOnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
