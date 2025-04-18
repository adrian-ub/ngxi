import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarRoundedMagniferZoomOutBoldIcon],svg[solar-rounded-magnifer-zoom-out-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="solarRoundedMagniferZoomOutBold0"><svg:g fill="none"><svg:path fill="#fff" d="M20.313 11.157a9.157 9.157 0 1 1-18.313 0a9.157 9.157 0 0 1 18.313 0"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M8.024 11.157c0-.4.324-.723.723-.723h4.82a.723.723 0 0 1 0 1.446h-4.82a.723.723 0 0 1-.723-.723" clip-rule="evenodd"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M18.838 18.838a.723.723 0 0 1 1.023 0l1.927 1.928a.723.723 0 0 1-1.022 1.022l-1.928-1.927a.723.723 0 0 1 0-1.023" clip-rule="evenodd"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#solarRoundedMagniferZoomOutBold0)"></svg:path>`,
})
export class SolarRoundedMagniferZoomOutBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
