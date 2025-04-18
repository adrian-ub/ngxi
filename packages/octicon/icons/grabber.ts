import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconGrabberIcon],svg[octicon-grabber-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M8 4v1H0V4h8zM0 8h8V7H0v1zm0 3h8v-1H0v1z" fill="currentColor"></svg:path>`,
})
export class OcticonGrabberIcon {
  readonly viewBox = input("0 0 8 16")
  readonly width = input("0.5em")
  readonly height = input("1em")
}
