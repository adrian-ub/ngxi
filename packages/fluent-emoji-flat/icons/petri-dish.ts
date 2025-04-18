import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatPetriDishIcon],svg[fluent-emoji-flat-petri-dish-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#AEDDFF" d="M16 28c9.75 0 12-6.596 12-13.5S22.627 2 16 2S4 7.596 4 14.5S6.5 28 16 28"></svg:path><svg:path fill="#83CBFF" d="M5 14.5C5 8.287 9.692 3.284 15.502 3.012a11 11 0 0 1 .996 0C22.309 3.284 27 8.287 27 14.5q0 .41-.027.813C26.565 10.11 21.568 8 16 8S5.435 10.11 5.027 15.313Q5 14.91 5 14.5"></svg:path><svg:path fill="#83CBFF" d="M16 27c6.474 0 11.751-5.34 11.991-12.024L28 15v3c0 5.799-4 12-12 12S4 23.799 4 18c0 0 .022-3.08 0-3l.008-.03C4.245 21.654 9.523 27 16 27"></svg:path><svg:path fill="#00A6ED" d="M26.973 15.313C26.573 21.318 21.78 26 16 26S5.426 21.318 5.027 15.313C5.435 10.11 10.432 6 16 6s10.565 4.11 10.973 9.313"></svg:path><svg:path fill="#E2FF92" d="M11.5 13a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m8 4a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5M16 19.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path></svg:g>`,
})
export class FluentEmojiFlatPetriDishIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
