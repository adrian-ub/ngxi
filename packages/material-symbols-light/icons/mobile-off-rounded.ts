import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMobileOffRoundedIcon],svg[material-symbols-light-mobile-off-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.492 22.408L1.362 3.277q-.14-.14-.15-.344t.15-.364t.353-.16t.354.16L21.2 21.7q.14.14.15.344t-.15.364t-.354.16t-.354-.16M6 7.213l1 1V18.5h9.927L18 19.573v.812q0 .67-.472 1.143q-.472.472-1.143.472h-8.77q-.67 0-1.143-.472Q6 21.056 6 20.385zm11 7.403V5.5H7.516q-.343 0-.59-.201t-.31-.514L6.09 3.573q-.132-.594.307-1.083Q6.837 2 7.616 2h8.769q.69 0 1.152.463T18 3.616v11q0 .213-.143.356q-.143.144-.357.144t-.357-.144t-.143-.356"></svg:path>`,
})
export class MaterialSymbolsLightMobileOffRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
