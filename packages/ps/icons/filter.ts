import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psFilterIcon],svg[ps-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m169 399l43 32q10 9 25 9q6 0 20-4q23-12 23-39V246L419 73q17-21 4-45q-15-25-38-25H47Q18 3 9 26q-10 26 4 45l139 175v119q0 22 17 34M47 45h338L237 229v168l-42-32V229z"></svg:path>`,
})
export class PsFilterIcon {
  readonly viewBox = input("0 0 432 472")
  readonly width = input("0.92em")
  readonly height = input("1em")
}
