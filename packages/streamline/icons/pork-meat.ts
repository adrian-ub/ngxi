import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlinePorkMeatIcon],svg[streamline-pork-meat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M1.68 4.883c-.417.51-1.055 1.601-1.055 3.5C.625 11.696 3.686 13 7 13s6.375-1.304 6.375-4.617c0-1.899-.638-2.99-1.055-3.5c-.2-.246-.353-.546-.353-.864V1l-3.15 1.5S7.633 2.22 7 2.22s-1.817.28-1.817.28L2.033 1v3.02c0 .317-.152.617-.353.863"></svg:path><svg:path d="M9.938 8.969c0 1.344-1.316 2.156-2.938 2.156s-2.938-.75-2.938-2.156S5.378 6.813 7 6.813s2.938.812 2.938 2.156Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4.188 5.75a.125.125 0 1 1 0-.25m0 .25a.125.125 0 1 0 0-.25m5.625.25a.125.125 0 1 0 0-.25m0 .25a.125.125 0 1 1 0-.25M6 9.219a.125.125 0 1 1 0-.25m0 .25a.125.125 0 1 0 0-.25m2 .25a.125.125 0 1 0 0-.25m0 .25a.125.125 0 1 1 0-.25"></svg:path></svg:g>`,
})
export class StreamlinePorkMeatIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
