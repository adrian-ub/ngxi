import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamWrenchFIcon],svg[jam-wrench-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.477 13.84l-4.243 4.243L8.01 11.86a6.002 6.002 0 0 1-6.445-9.273L5.1 6.12a1 1 0 0 0 1.415-1.414L2.979 1.17a6.002 6.002 0 0 1 9.273 6.445zm1.414 1.415l.707.707a3 3 0 0 1-4.243 4.243l-.707-.708z"></svg:path>`,
})
export class JamWrenchFIcon {
  readonly viewBox = input("-1 -1 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
