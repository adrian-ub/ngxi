import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconUrgencyOutlineIcon],svg[lsicon-urgency-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M2 3.5h4.5M2 8h3.5M2 12.5h4.5m4.083-5.056V2.5L6.5 9.111h2.917V13.5L13.5 7.444z"></svg:path>`,
})
export class LsiconUrgencyOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
