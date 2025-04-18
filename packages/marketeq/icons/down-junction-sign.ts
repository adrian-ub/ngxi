import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqDownJunctionSignIcon],svg[marketeq-down-junction-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M33.333 6.25H16.667m25 8.333h2.083zm0-8.333h2.083zM8.333 14.583H6.25zm0-8.333H6.25z"></svg:path><svg:path stroke="#306CFE" d="M16.667 14.583h4.166V31.25h-6.25l8.813 10.583a2.083 2.083 0 0 0 3.208 0l8.813-10.583h-6.25V14.583h4.166"></svg:path></svg:g>`,
})
export class MarketeqDownJunctionSignIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
