import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faMediumIcon],svg[fa-medium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M597 293v1173q0 25-12.5 42.5T548 1526q-17 0-33-8L50 1285q-21-10-35.5-33.5T0 1205V65q0-20 10-34t29-14q14 0 44 15l511 256q3 3 3 5m64 101l534 866l-534-266zm1131 18v1054q0 25-14 40.5t-38 15.5t-47-13l-441-220zm-3-120q0 3-256.5 419.5T1232 1199L842 565l324-527q17-28 52-28q14 0 26 6l541 270q4 2 4 6"></svg:path>`,
})
export class FaMediumIcon {
  readonly viewBox = input("0 0 1792 1536")
  readonly width = input("1.17em")
  readonly height = input("1em")
}
