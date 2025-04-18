import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceShareIcon],svg[guidance-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M15.567 16.946a4 4 0 1 1 6.867 4.107a4 4 0 0 1-6.867-4.107Zm0 0A24 24 0 0 0 9.06 13.77l-.41-.129m6.917-6.586a4 4 0 1 1 6.867-4.107a4 4 0 0 1-6.867 4.107Zm0 0A24 24 0 0 1 9.06 10.23l-.41.129m0 0c.225.5.35 1.055.35 1.64s-.125 1.14-.35 1.64m0-3.28a4 4 0 1 0 0 3.28"></svg:path>`,
})
export class GuidanceShareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
