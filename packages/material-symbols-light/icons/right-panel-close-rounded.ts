import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightRightPanelCloseRoundedIcon],svg[material-symbols-light-right-panel-close-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.404 14.202q0 .275.252.38t.449-.09l1.932-1.933q.236-.236.236-.559t-.242-.565L9.104 9.508q-.196-.196-.448-.095t-.252.383zM5.616 20q-.667 0-1.141-.475T4 18.386V5.615q0-.666.475-1.14T5.615 4h12.77q.666 0 1.14.475T20 5.615v12.77q0 .666-.475 1.14t-1.14.475zM15 19V5H5.616q-.231 0-.424.192T5 5.616v12.769q0 .23.192.423t.423.192z"></svg:path>`,
})
export class MaterialSymbolsLightRightPanelCloseRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
