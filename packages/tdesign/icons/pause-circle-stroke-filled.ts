import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignPauseCircleStrokeFilledIcon],svg[tdesign-pause-circle-stroke-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1M8.5 17h2V7h-2zm5 0h2V7h-2z"></svg:path>`,
})
export class TdesignPauseCircleStrokeFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
