import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsForwardStepIcon],svg[zondicons-forward-step-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 5h3v10h-3zM4 5l9 5l-9 5z"></svg:path>`,
})
export class ZondiconsForwardStepIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
