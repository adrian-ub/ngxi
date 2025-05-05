import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconToiletIcon],svg[picon-toilet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 6V1h2v3h4q0 2-2 2l1 2H2V6"></svg:path>`,
})
export class PiconToiletIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
