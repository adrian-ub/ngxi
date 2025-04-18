import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkMeningIcon],svg[nrk-mening-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.222 3H23v10l-4 7h-3l3-7h-5.778zM1 3h9.778v10L7 20H4l3-7H1z"></svg:path>`,
})
export class NrkMeningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
