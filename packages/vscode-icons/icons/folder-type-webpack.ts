import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFolderTypeWebpackIcon],svg[vscode-icons-folder-type-webpack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:radialgradient id="vscodeIconsFolderTypeWebpack0" cx="-66.96" cy="-69.047" r=".004" gradientTransform="matrix(2074.534 0 0 -2395.464 138932.399 -165379.819)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#93b4e7"></svg:stop><svg:stop offset=".593" stop-color="#b9d1f8"></svg:stop><svg:stop offset="1" stop-color="#9cb6e0"></svg:stop></svg:radialgradient></svg:defs><svg:path fill="#5578bf" d="M27.5 5.5h-9.3l-2.1 4.2H4.4v16.8h25.2v-21Zm0 4.2h-8.2l1.1-2.1h7.1Z"></svg:path><svg:path fill="url(#vscodeIconsFolderTypeWebpack0)" d="m21.9 10.032l-9.079 5.242v10.484L21.9 31l9.079-5.242V15.274Z"></svg:path><svg:path fill="#6f95db" d="m21.9 15.35l-4.5 2.6v5.2l4.5 2.6l4.5-2.6v-5.2Z"></svg:path><svg:path fill="#fff" fill-opacity=".1" d="m21.9 10l-9.1 5.278l9.1 4.954L31 15.31Zm0 10.911l-9.1 4.824l9.1 5.245l9.066-5.28z"></svg:path>`,
})
export class VscodeIconsFolderTypeWebpackIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
