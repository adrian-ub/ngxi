import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenAvtIcon],svg[token-avt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.225 15.94l5.083 2.414H3.98l11.25-2.414zM10.937 3v4.214l-7.672 9.577z"></svg:path><svg:path fill="currentColor" d="m20.735 7.642l-6.882 3.22L7.097 21z"></svg:path><svg:path fill="currentColor" d="m10.937 3l9.344 15.343l-5.183-2.404l-4.161-8.725z"></svg:path>`,
})
export class TokenAvtIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
