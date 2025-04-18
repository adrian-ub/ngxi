import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlinePolaroidFourIcon],svg[streamline-polaroid-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.25.5H1a.5.5 0 0 0-.5.5v4.25a.5.5 0 0 0 .5.5h4.25a.5.5 0 0 0 .5-.5V1a.5.5 0 0 0-.5-.5M13 .5H8.75a.5.5 0 0 0-.5.5v4.25a.5.5 0 0 0 .5.5H13a.5.5 0 0 0 .5-.5V1a.5.5 0 0 0-.5-.5M5.25 8.25H1a.5.5 0 0 0-.5.5V13a.5.5 0 0 0 .5.5h4.25a.5.5 0 0 0 .5-.5V8.75a.5.5 0 0 0-.5-.5m7.75 0H8.75a.5.5 0 0 0-.5.5V13a.5.5 0 0 0 .5.5H13a.5.5 0 0 0 .5-.5V8.75a.5.5 0 0 0-.5-.5M.5 3.5h5.25m2.5 0h5.25m-5.25 7.75h5.25m-13 0h5.25"></svg:path>`,
})
export class StreamlinePolaroidFourIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
