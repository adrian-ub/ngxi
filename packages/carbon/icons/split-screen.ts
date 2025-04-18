import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonSplitScreenIcon],svg[carbon-split-screen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 4h2v24h-2zm-5 3v18H4V7zm0-2H4a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m18 2v18h-6V7zm0-2h-6a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2"></svg:path>`,
})
export class CarbonSplitScreenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
