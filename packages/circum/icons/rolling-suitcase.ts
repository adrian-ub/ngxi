import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumRollingSuitcaseIcon],svg[circum-rolling-suitcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.25 7.49H15V3.56a1.5 1.5 0 0 0-1.5-1.5h-3A1.51 1.51 0 0 0 9 3.56v3.93H7.75a2.5 2.5 0 0 0-2.5 2.5v8.44a2.5 2.5 0 0 0 2.5 2.5h.5v.01a1 1 0 0 0 2 0v-.01h3.5v.01a1 1 0 0 0 2 0v-.01h.5a2.5 2.5 0 0 0 2.5-2.5V9.99a2.5 2.5 0 0 0-2.5-2.5M10 3.56a.51.51 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V7.5h-4Zm7.75 14.87a1.5 1.5 0 0 1-1.5 1.5h-8.5a1.5 1.5 0 0 1-1.5-1.5V9.99a1.51 1.51 0 0 1 1.5-1.5h8.5a1.5 1.5 0 0 1 1.5 1.5Z"></svg:path>`,
})
export class CircumRollingSuitcaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
