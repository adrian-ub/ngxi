import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMobileOffIcon],svg[material-symbols-light-mobile-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.846 22.762L1.008 2.923l.708-.708l19.838 19.839zM6 7.214l1 1V18.5h9.927L18 19.573v.812q0 .67-.472 1.143q-.472.472-1.143.472h-8.77q-.67 0-1.143-.472Q6 21.056 6 20.385zM7.402 5.5L6.034 4.108v-.654q.058-.613.507-1.034Q6.991 2 7.616 2h8.769q.69 0 1.152.463T18 3.616v12.073l-1-1V5.5z"></svg:path>`,
})
export class MaterialSymbolsLightMobileOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
