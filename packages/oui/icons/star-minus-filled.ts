import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiStarMinusFilledIcon],svg[oui-star-minus-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 2a.86.86 0 0 1 .792.511l1.33 2.924l3.128.446c.71.102 1.001.976.496 1.487L9.433 9.704l.563 3.268A.877.877 0 0 1 9.136 14a.86.86 0 0 1-.429-.116L6 12.343l-2.707 1.542a.86.86 0 0 1-.43.116a.877.877 0 0 1-.859-1.027l.563-3.269L.254 7.368C-.25 6.857.04 5.983.75 5.88l3.128-.446l1.33-2.923A.86.86 0 0 1 6 2m10 8v1h-5v-1z"></svg:path>`,
})
export class OuiStarMinusFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
