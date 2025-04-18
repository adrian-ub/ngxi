import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonStopSignFilledIcon],svg[carbon-stop-sign-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.586 29h-9.172A2 2 0 0 1 10 28.414L3.586 22A2 2 0 0 1 3 20.586v-9.172A2 2 0 0 1 3.586 10L10 3.586A2 2 0 0 1 11.414 3h9.172A2 2 0 0 1 22 3.586L28.414 10A2 2 0 0 1 29 11.414v9.172A2 2 0 0 1 28.414 22L22 28.414a2 2 0 0 1-1.414.586"></svg:path>`,
})
export class CarbonStopSignFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
