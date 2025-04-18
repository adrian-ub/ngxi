import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamScrewdriverFIcon],svg[jam-screwdriver-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.778 7.464l-4.95 4.95a2 2 0 0 1-2.828 0l-5.657 5.657a1 1 0 0 1 0 1.414L3.93 20.9a1 1 0 0 1-1.414 0L1.1 19.485a1 1 0 0 1 0-1.414l1.414-1.414a1 1 0 0 1 1.414 0L9.586 11a2 2 0 0 1 0-2.828l4.95-4.95zm1.414-1.414L15.95 1.808l.707-.707a2 2 0 0 1 2.828 0L20.9 2.515a2 2 0 0 1 0 2.828z"></svg:path>`,
})
export class JamScrewdriverFIcon {
  readonly viewBox = input("-1 -1 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
