import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonSkipForwardFilledIcon],svg[carbon-skip-forward-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 4h2v24h-2zM5 28a1 1 0 0 1-1-1V5a1 1 0 0 1 1.501-.865l19 11a1 1 0 0 1 0 1.73l-19 11A1 1 0 0 1 5 28"></svg:path>`,
})
export class CarbonSkipForwardFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
