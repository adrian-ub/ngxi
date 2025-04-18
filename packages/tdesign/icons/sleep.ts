import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSleepIcon],svg[tdesign-sleep-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m7-3.5v1a.5.5 0 0 0 1 0v-1h2v1a2.5 2.5 0 0 1-5 0v-1zm7 0v1a.5.5 0 0 0 1 0v-1h2v1a2.5 2.5 0 0 1-5 0v-1zM11 14h2.004v2.004H11z"></svg:path>`,
})
export class TdesignSleepIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
