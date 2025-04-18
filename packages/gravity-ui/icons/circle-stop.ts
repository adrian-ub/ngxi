import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleStopIcon],svg[gravity-ui-circle-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M5.25 6.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1h-3.5a1 1 0 0 1-1-1z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleStopIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
