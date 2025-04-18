import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2PicturePositionIcon],svg[fluent-mdl2-picture-position-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 512h1024v1024H512zm128 896h549l-357-358l-192 193zm0-768v421l192-191l539 538h37V640zm576 256q-26 0-45-19t-19-45t19-45t45-19t45 19t19 45t-19 45t-45 19M859 347l-91-91L1024 0l256 256l-91 91l-165-166zm330 1354l91 91l-256 256l-256-256l91-91l165 166zM347 859l-166 165l166 165l-91 91L0 1024l256-256zm1701 165l-256 256l-91-91l166-165l-166-165l91-91z"></svg:path>`,
})
export class FluentMdl2PicturePositionIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
