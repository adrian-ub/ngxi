import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFlashlightOffRoundedIcon],svg[material-symbols-light-flashlight-off-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.48 19.385v-8.97L2.659 4.593q-.14-.14-.15-.344t.15-.363t.354-.16t.353.16l16.577 16.577q.14.14.15.344t-.15.363t-.353.16t-.354-.16l-4.754-4.753v2.969q0 .67-.472 1.143q-.472.472-1.143.472h-2.77q-.671 0-1.143-.472t-.472-1.144M7.83 5.5L6.534 4.204q.143-.518.566-.86T8.096 3h6.77q.67 0 1.143.472q.472.472.472 1.144V5.5zm6.65 6.65L8.83 6.5h7.65v.708q0 .242-.066.46q-.065.216-.201.428l-1.733 2.596z"></svg:path>`,
})
export class MaterialSymbolsLightFlashlightOffRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
