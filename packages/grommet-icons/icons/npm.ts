import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsNpmIcon],svg[grommet-icons-npm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M0 0h24v24H0z"></svg:path><svg:path d="M16.718 7.928h-4.513V20.25H4V3h16v17.249h-3.282z"></svg:path></svg:g>`,
})
export class GrommetIconsNpmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
