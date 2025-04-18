import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psDropboxIcon],svg[ps-dropbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M375 161L238 77l87-72l137 85zm-51 159l132-78l-80-67l-129 78zm-107-67L88 175L8 242l132 78zM94 309v25l132 81V261l-87 72zm276 0l-45 24l-87-72v154l132-81zM226 77L140 5L2 90l87 71z"></svg:path>`,
})
export class PsDropboxIcon {
  readonly viewBox = input("0 0 464 464")
  readonly width = input("1em")
  readonly height = input("1em")
}
