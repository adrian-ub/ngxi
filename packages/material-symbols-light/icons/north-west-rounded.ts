import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightNorthWestRoundedIcon],svg[material-symbols-light-north-west-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 7.708V14.5q0 .213-.144.356T6.499 15t-.356-.144T6 14.5V6.808q0-.343.232-.576T6.808 6H14.5q.213 0 .356.144t.144.357t-.144.356T14.5 7H7.708l10.938 10.939q.14.14.15.344t-.15.363t-.354.16t-.353-.16z"></svg:path>`,
})
export class MaterialSymbolsLightNorthWestRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
