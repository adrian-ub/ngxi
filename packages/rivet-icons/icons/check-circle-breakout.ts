import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsCheckCircleBreakoutIcon],svg[rivet-icons-check-circle-breakout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M2 8a6 6 0 0 1 8.57-5.423L11.43.77A8 8 0 1 0 16 8h-2A6 6 0 0 1 2 8"></svg:path><svg:path d="M8 11.414L15.914 3.5L14.5 2.086L8 8.586l-2-2L4.586 8z"></svg:path></svg:g>`,
})
export class RivetIconsCheckCircleBreakoutIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
