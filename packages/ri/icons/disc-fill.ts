import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riDiscFillIcon],svg[ri-disc-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 9.17A3 3 0 1 0 15 12V2.458c4.057 1.274 7 5.064 7 9.542c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2q.507 0 1 .05z"></svg:path>`,
})
export class RiDiscFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
