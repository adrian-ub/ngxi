import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiBoxesHorizontalIcon],svg[oui-boxes-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 6h4v4H0zm1 1v2h2V7zm5-1h4v4H6zm1 1v2h2V7zm5-1h4v4h-4zm1 3h2V7h-2z"></svg:path>`,
})
export class OuiBoxesHorizontalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
