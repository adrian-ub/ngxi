import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineHelpQuestion1Icon],svg[streamline-help-question-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13"></svg:path><svg:path d="M5.25 5.25a1.75 1.75 0 0 1 2.093-1.717A1.752 1.752 0 0 1 8.62 5.92A1.75 1.75 0 0 1 7.002 7v1.167M7 10.459a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5"></svg:path></svg:g>`,
})
export class StreamlineHelpQuestion1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
