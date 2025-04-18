import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundSdCardAlertIcon],svg[ic-round-sd-card-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2h-7.17c-.53 0-1.04.21-1.42.59L4.6 7.42c-.37.37-.58.88-.58 1.4L4 20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-5 15h-2v-2h2zm-1-4c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1s1 .45 1 1v3c0 .55-.45 1-1 1"></svg:path>`,
})
export class IcRoundSdCardAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
