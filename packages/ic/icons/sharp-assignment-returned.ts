import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpAssignmentReturnedIcon],svg[ic-sharp-assignment-returned-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3h-6.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H3v18h18zm-9 0c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m0 15l-5-5h3V9h4v4h3z"></svg:path>`,
})
export class IcSharpAssignmentReturnedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
