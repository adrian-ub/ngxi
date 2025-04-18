import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSouthWestRoundedIcon],svg[material-symbols-light-south-west-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.308 18.5q-.343 0-.576-.232t-.232-.576V10q0-.213.144-.356t.357-.144t.356.144T6.5 10v6.792L18.246 5.046q.16-.16.354-.16t.354.16t.16.354t-.16.354L7.208 17.5H14q.213 0 .356.144t.144.357t-.144.356T14 18.5z"></svg:path>`,
})
export class MaterialSymbolsLightSouthWestRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
