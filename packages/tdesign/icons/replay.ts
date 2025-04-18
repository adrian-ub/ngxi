import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignReplayIcon],svg[tdesign-replay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23 14l-4.4-3.3l1.2-1.6l.928.696A9 9 0 1 0 12 21a9 9 0 0 0 8.252-5.4l.4-.917l1.833.801l-.4.916A11 11 0 0 1 12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11zm-6.197-2L9.5 16.869V7.13zM11.5 10.868v2.264L13.197 12z"></svg:path>`,
})
export class TdesignReplayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
