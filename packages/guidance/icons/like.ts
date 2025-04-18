import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceLikeIcon],svg[guidance-like-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M1.5 9v12m17-.5v-.16a16 16 0 0 1 3.761-10.307l.239-.283V9.5h-9V6A3.5 3.5 0 0 0 10 2.5h-.5V5A4.5 4.5 0 0 1 5 9.5h-.5v11z"></svg:path>`,
})
export class GuidanceLikeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
