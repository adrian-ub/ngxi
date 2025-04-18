import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCountdownCircleOffIcon],svg[pepicons-pop-countdown-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M12.5 6a1 1 0 0 1 1-1a8 8 0 1 1-8 8a1 1 0 0 1 2 0a6 6 0 1 0 6-6a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M9.394 14.447a1 1 0 0 0-.447-1.341l-2-1a1 1 0 1 0-.894 1.789l2 1a1 1 0 0 0 1.341-.448" clip-rule="evenodd"></svg:path><svg:path d="M11.5 6.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0M9 8a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-1.5 2.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill-rule="evenodd" d="M7.207 12.293a1 1 0 0 1 0 1.414l-1.5 1.5a1 1 0 0 1-1.414-1.414l1.5-1.5a1 1 0 0 1 1.414 0M13.5 9a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M17.5 13a1 1 0 0 1-1 1h-3a1 1 0 1 1 0-2h3a1 1 0 0 1 1 1" clip-rule="evenodd"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopCountdownCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
