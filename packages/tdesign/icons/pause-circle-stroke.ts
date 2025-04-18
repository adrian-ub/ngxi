import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignPauseCircleStrokeIcon],svg[tdesign-pause-circle-stroke-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m9.5-5v10h-2V7zm5 0v10h-2V7z"></svg:path>`,
})
export class TdesignPauseCircleStrokeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
