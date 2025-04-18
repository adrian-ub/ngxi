import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightRollerShadesClosedRoundedIcon],svg[material-symbols-light-roller-shades-closed-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.997 21.135q-.472 0-.802-.333q-.33-.332-.33-.802H3.5q-.213 0-.356-.144T3 19.499t.144-.356T3.5 19H5V5.616q0-.667.475-1.141T6.615 4h10.77q.666 0 1.14.475T19 5.615V19h1.5q.213 0 .356.144t.144.357t-.144.356T20.5 20h-7.365q0 .475-.334.805q-.333.33-.804.33M6 19h5.5v-2.404H6zm6.5 0H18v-2.404h-5.5z"></svg:path>`,
})
export class MaterialSymbolsLightRollerShadesClosedRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
