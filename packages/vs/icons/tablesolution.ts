import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vsTablesolutionIcon],svg[vs-tablesolution-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 1248l320-320q5 105 48 202t120 174t174 120t202 48l-320 320q-188-74-328-216Q74 1436 0 1248m1792 0l-320-320q-5 105-48 202t-120 174t-174 120t-202 48l320 320q188-74 328-216q142-140 216-328M1248 0L980 268l-52 52q105 5 202 48t174 120t120 174t48 202l320-320q-74-188-216-328Q1436 74 1248 0M544 0l320 320q-105 5-202 48T488 488T368 662t-48 202l-52-52L0 544q74-188 216-328Q356 74 544 0"></svg:path>`,
})
export class VsTablesolutionIcon {
  readonly viewBox = input("0 0 1792 1792")
  readonly width = input("1em")
  readonly height = input("1em")
}
