import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDistributeVerticalBottomIcon],svg[carbon-distribute-vertical-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 28h28v2H2zm22-2H8a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2m0-6.001L8 20v4h16zM2 12h28v2H2zm18-2h-8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2m0-6.001L12 4v4h8z"></svg:path>`,
})
export class CarbonDistributeVerticalBottomIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
