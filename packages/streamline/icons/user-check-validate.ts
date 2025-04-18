import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineUserCheckValidateIcon],svg[streamline-user-check-validate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5 5.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0 7H.5v-.542A4.51 4.51 0 0 1 5.204 7.5A4.5 4.5 0 0 1 8.354 9m5.146-.5l-4 5l-2-1.5"></svg:path>`,
})
export class StreamlineUserCheckValidateIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
