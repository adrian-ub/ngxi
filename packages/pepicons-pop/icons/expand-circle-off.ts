import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopExpandCircleOffIcon],svg[pepicons-pop-expand-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8.707 18.707a1 1 0 0 1-1.414-1.414l4-4a1 1 0 1 1 1.414 1.414z"></svg:path><svg:path d="M8 19a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2z"></svg:path><svg:path d="M9 18a1 1 0 1 1-2 0v-4a1 1 0 1 1 2 0zm5.707-5.293a1 1 0 0 1-1.414-1.414l4-4a1 1 0 1 1 1.414 1.414z"></svg:path><svg:path d="M19 12a1 1 0 1 1-2 0V8a1 1 0 1 1 2 0z"></svg:path><svg:path d="M14 9a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2zM4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopExpandCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
