import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopStopwatchCircleIcon],svg[pepicons-pop-stopwatch-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M13 8.5a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11M5.5 14a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0"></svg:path><svg:path d="M5.793 6.793a1 1 0 0 1 1.414 0l1.5 1.5a1 1 0 0 1-1.414 1.414l-1.5-1.5a1 1 0 0 1 0-1.414m11.5 2.914a1 1 0 0 0 1.414 0l1.5-1.5a1 1 0 0 0-1.414-1.414l-1.5 1.5a1 1 0 0 0 0 1.414m-1.013 1.668a1 1 0 0 1-.155 1.406l-2.5 2a1 1 0 0 1-1.25-1.562l2.5-2a1 1 0 0 1 1.406.156M12 7V5h2v2z"></svg:path><svg:path d="M10.5 5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1"></svg:path><svg:path d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13"></svg:path></svg:g>`,
})
export class PepiconsPopStopwatchCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
