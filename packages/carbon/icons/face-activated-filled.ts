import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonFaceActivatedFilledIcon],svg[carbon-face-activated-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m-4.5 9A2.5 2.5 0 1 1 9 13.5a2.48 2.48 0 0 1 2.5-2.5M16 24a8.11 8.11 0 0 1-7-4h14a8.11 8.11 0 0 1-7 4m4.5-8a2.5 2.5 0 1 1 2.5-2.5a2.48 2.48 0 0 1-2.5 2.5"></svg:path>`,
})
export class CarbonFaceActivatedFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
