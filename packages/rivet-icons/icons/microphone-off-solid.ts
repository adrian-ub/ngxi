import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsMicrophoneOffSolidIcon],svg[rivet-icons-microphone-off-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.293.293l1.414 1.414L11 6.414V7a3 3 0 0 1-3.538 2.952l-.814.814A4 4 0 0 0 12 7h2a6 6 0 0 1-5 5.917V14h2v2H5v-2h2v-1.083a6 6 0 0 1-1.861-.642l-3.432 3.432l-1.414-1.414zm-3.532 1.532A3 3 0 0 0 5 3v4q0 .276.048.538zM4.234 8.352A4 4 0 0 1 4 7H2c0 1.036.263 2.01.725 2.861l1.51-1.51Z"></svg:path>`,
})
export class RivetIconsMicrophoneOffSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
