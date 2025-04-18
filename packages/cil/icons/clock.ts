import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilClockIcon],svg[cil-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M271.514 95.5h-32v178.111l115.613 54.948l13.737-28.902l-97.35-46.268z"></svg:path><svg:path fill="currentColor" d="M256 16C123.452 16 16 123.452 16 256s107.452 240 240 240s240-107.452 240-240S388.548 16 256 16m0 448c-114.875 0-208-93.125-208-208S141.125 48 256 48s208 93.125 208 208s-93.125 208-208 208"></svg:path>`,
})
export class CilClockIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
