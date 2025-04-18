import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiSlidingBarndoorClosedIcon],svg[cbi-sliding-barndoor-closed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.953 2H2v.769h9.953V22H22V2Zm9.333 19.138h-8.451v-.577h8.451zm0-1.237h-8.451v-.577h8.451zm0-1.219h-8.451v-.577h8.451zm0-1.237h-8.451v-.577h8.451zm0-1.209h-8.451v-.577h8.451zm0-1.255h-8.451V14.4h8.451zm0-1.2h-8.451V13.2h8.451zM15.585 12v-.481h2.95V12Zm5.7-1.357h-8.45v-.576h8.451zm0-1.237h-8.45v-.577h8.451zm0-1.218h-8.45v-.577h8.451zm0-1.238h-8.45v-.577h8.451zm0-1.208h-8.45v-.577h8.451zm0-1.256h-8.45v-.577h8.451zm0-1.2h-8.45v-.579h8.451z"></svg:path>`,
})
export class CbiSlidingBarndoorClosedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
