import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayDownIcon],svg[subway-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 512h139.6V372.4H0zm46.5-93.1H93v46.5H46.5zM0 139.6h139.6V0H0zm0 186.2h139.6V186.2H0zm46.5-93.1H93v46.5H46.5zM209.5 0c162.9 93.1 244.4 221.1 58.2 337.5L186.2 256v256h256l-81.5-81.5C605.1 186.2 372.4 0 209.5 0"></svg:path>`,
})
export class SubwayDownIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
