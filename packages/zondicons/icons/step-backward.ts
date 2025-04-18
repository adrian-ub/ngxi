import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsStepBackwardIcon],svg[zondicons-step-backward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5h3v10H4zm12 0v10l-9-5z"></svg:path>`,
})
export class ZondiconsStepBackwardIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
