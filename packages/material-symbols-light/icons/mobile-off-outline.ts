import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMobileOffOutlineIcon],svg[material-symbols-light-mobile-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.846 22.762L1.008 2.923l.708-.708l19.838 19.839zM6 7.214l1 1V18.5h9.927L18 19.573v.812q0 .67-.472 1.143q-.472.472-1.143.472h-8.77q-.67 0-1.143-.472Q6 21.056 6 20.385zM7 19.5v.885q0 .269.173.442t.443.173h8.769q.269 0 .442-.173t.173-.443V19.5zm.402-14l-.975-1H17v-.885q0-.269-.173-.442T16.385 3H6.196l-.162-.161q.154-.383.536-.611T7.384 2h9q.691 0 1.154.463T18 3.616v12.073l-1-1V5.5zm4.196-1"></svg:path>`,
})
export class MaterialSymbolsLightMobileOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
