import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonIbmEloAutomotiveComplianceIcon],svg[carbon-ibm-elo-automotive-compliance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29.947 13.936h-2c-.737 0-1.375.405-1.722 1H6.015l2.625-7h7.307v-2H8.64a2.01 2.01 0 0 0-1.873 1.297l-2.514 6.703H1.947v2h2v9c0 1.102.897 2 2 2v3h2v-3h16v3h2v-3c1.102 0 2-.898 2-2v-9h2zm-24 11v-3h3v-2h-3v-3h20v3h-3v2h3v3z"></svg:path><svg:path fill="currentColor" d="M11.979 19.941h8v2h-8zM29.537 2.526l-6.59 6.59l-2.59-2.59l-1.41 1.41l4 4l8-8z"></svg:path>`,
})
export class CarbonIbmEloAutomotiveComplianceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
