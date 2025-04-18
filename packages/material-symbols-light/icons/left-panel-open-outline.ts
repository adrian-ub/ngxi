import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLeftPanelOpenOutlineIcon],svg[material-symbols-light-left-panel-open-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.404 8.827v6.346L15.596 12zM5.616 20q-.672 0-1.144-.472T4 18.385V5.615q0-.67.472-1.143Q4.944 4 5.616 4h12.769q.67 0 1.143.472q.472.472.472 1.144v12.769q0 .67-.472 1.143q-.472.472-1.143.472zM8 19V5H5.616q-.231 0-.424.192T5 5.616v12.769q0 .23.192.423t.423.192zm1 0h9.385q.23 0 .423-.192t.192-.424V5.616q0-.231-.192-.424T18.384 5H9zm-1 0H5z"></svg:path>`,
})
export class MaterialSymbolsLightLeftPanelOpenOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
