import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoFlipboardIcon],svg[fontisto-flipboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h7.7v24H0zm8.5 8.5h7.8v7.8H8.5zm0-8.5H24v7.7H8.5z"></svg:path>`,
})
export class FontistoFlipboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
