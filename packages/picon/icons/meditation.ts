import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconMeditationIcon],svg[picon-meditation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3 1l1-1l1 1l-1 1M2 2h4v1l2 2v1L6 4v2l2 1v1H3V7l2-1l-3 1v1H0V7l2-1V4L0 6V5l2-2"></svg:path>`,
})
export class PiconMeditationIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
