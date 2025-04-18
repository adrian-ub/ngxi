import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayPreviousIcon],svg[subway-previous-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M274.3 262.5L512 381.4V143.6zm-237.7 0l237.7 118.9V143.6zM0 143.6v237.7h36.6V143.6z"></svg:path>`,
})
export class SubwayPreviousIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
