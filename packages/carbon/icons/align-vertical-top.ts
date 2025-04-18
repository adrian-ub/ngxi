import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonAlignVerticalTopIcon],svg[carbon-align-vertical-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 20h-4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2m-4-9v7h4.001L24 11zm-8 17H8a2 2 0 0 1-2-2V11a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2M8 11v15h4.001L12 11zM2 4h28v2H2z"></svg:path>`,
})
export class CarbonAlignVerticalTopIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
