import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkArrowNestedIcon],svg[nrk-arrow-nested-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4H2v2h13v11.08l-5-3.25v2.272l6 3.9l6-3.9V13.83l-5 3.25z"></svg:path>`,
})
export class NrkArrowNestedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
