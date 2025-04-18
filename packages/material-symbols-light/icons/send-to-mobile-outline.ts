import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSendToMobileOutlineIcon],svg[material-symbols-light-send-to-mobile-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17 15.308l-.708-.708l2.089-2.1H12.5v-1h5.88l-2.088-2.1l.708-.708L20.308 12zM7.616 22q-.672 0-1.144-.472T6 20.385V3.615q0-.67.472-1.143Q6.944 2 7.616 2h8.769q.67 0 1.143.472q.472.472.472 1.144v3.307h-1V5.5H7v13h10v-1.423h1v3.307q0 .672-.472 1.144T16.385 22zM7 19.5v.885q0 .23.192.423t.423.192h8.77q.23 0 .423-.192t.192-.424V19.5zm0-15h10v-.885q0-.23-.192-.423T16.384 3H7.616q-.231 0-.424.192T7 3.616zm0 0V3zm0 15V21z"></svg:path>`,
})
export class MaterialSymbolsLightSendToMobileOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
