import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonSvgIcon],svg[carbon-svg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 23h-6a2 2 0 0 1-2-2V11a2 2 0 0 1 2-2h6v2h-6v10h4v-4h-2v-2h4zM18 9l-2 13l-2-13h-2l2.52 14h2.96L20 9zM8 23H2v-2h6v-4H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h6v2H4v4h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2"></svg:path>`,
})
export class CarbonSvgIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
