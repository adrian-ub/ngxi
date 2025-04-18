import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeWebpackIcon],svg[vscode-icons-file-type-webpack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:radialgradient id="vscodeIconsFileTypeWebpack0" cx="-236.884" cy="-171.086" r=".006" gradientTransform="matrix(2157.515 0 0 -2491.283 511096.688 -426208.482)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#93b4e7"></svg:stop><svg:stop offset=".593" stop-color="#b9d1f8"></svg:stop><svg:stop offset="1" stop-color="#9cb6e0"></svg:stop></svg:radialgradient></svg:defs><svg:path fill="url(#vscodeIconsFileTypeWebpack0)" d="M16 2.043L3.9 9.032v13.979L16 30l12.106-6.989V9.032Z"></svg:path><svg:path fill="#6f95db" d="M16 9.133L10 12.6v6.932L16 23l6-3.466V12.6Z"></svg:path><svg:path fill="#fff" fill-opacity=".1" d="M16 2L3.869 9.037L16 15.642L28.131 9.08Zm0 14.548L3.869 22.981L16 29.974l12.088-7.037z"></svg:path>`,
})
export class VscodeIconsFileTypeWebpackIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
