import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[websymbolStarIcon],svg[websymbol-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1050 386q0 15-29 38L746 624l105 323q5 17 5 30q0 24-18 24q-17 0-38-17L525 785L250 984q-23 17-39 17q-18 0-18-23q0-11 6-31l105-323L29 424Q0 403 0 387q0-23 49-23l340 1L493 41q12-40 32-40q19 0 31 40l106 324l339-1q49 0 49 22"></svg:path>`,
})
export class WebsymbolStarIcon {
  readonly viewBox = input("0 0 1050 1000")
  readonly width = input("1.05em")
  readonly height = input("1em")
}
