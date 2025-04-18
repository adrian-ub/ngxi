import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDistributeVerticalCenterIcon],svg[carbon-distribute-vertical-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 21h-4v-1a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v1H2v2h4v1a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-1h4zm-6 3H8v-4l16-.001zm6-15h-8V8a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v1H2v2h8v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1h8zm-10 3h-8V8l8-.001z"></svg:path>`,
})
export class CarbonDistributeVerticalCenterIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
