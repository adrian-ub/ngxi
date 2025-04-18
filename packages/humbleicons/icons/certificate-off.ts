import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsCertificateOffIcon],svg[humbleicons-certificate-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 4l16 16M6.831 7.366a2.02 2.02 0 0 0 0 3.268l.444.323l-.085.542A2.02 2.02 0 0 0 9.5 13.81l.543-.085l.323.444a2.022 2.022 0 0 0 3.268 0M9 17v4l3-2l3 2v-2.5M8 4.55c.412-.3.94-.448 1.5-.36l.543.085l.323-.444a2.022 2.022 0 0 1 3.268 0l.323.444l.542-.085A2.02 2.02 0 0 1 16.81 6.5l-.085.543l.444.323a2.022 2.022 0 0 1 0 3.268l-.444.323l.085.542c.088.56-.06 1.089-.36 1.501"></svg:path>`,
})
export class HumbleiconsCertificateOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
