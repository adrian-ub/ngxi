import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCallReceivedRoundedIcon],svg[material-symbols-light-call-received-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.808 18q-.343 0-.576-.232T6 17.192V9.5q0-.213.144-.356T6.501 9t.356.144T7 9.5v6.792L17.939 5.354q.14-.14.344-.15t.363.15t.16.354t-.16.353L7.708 17H14.5q.213 0 .356.144t.144.357t-.144.356T14.5 18z"></svg:path>`,
})
export class MaterialSymbolsLightCallReceivedRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
