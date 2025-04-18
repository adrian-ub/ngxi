import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uitStepForwardIcon],svg[uit-step-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.853 7.147a.5.5 0 0 0-.707.707L11.302 12l-4.156 4.146a.5.5 0 1 0 .707.708l4.51-4.5a.5.5 0 0 0 0-.707zM16.5 7a.5.5 0 0 0-.5.5v9a.5.5 0 1 0 1 0v-9a.5.5 0 0 0-.5-.5"></svg:path>`,
})
export class UitStepForwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
