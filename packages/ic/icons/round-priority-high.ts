import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundPriorityHighIcon],svg[ic-round-priority-high-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="19" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M12 3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2s2-.9 2-2V5c0-1.1-.9-2-2-2"></svg:path>`,
})
export class IcRoundPriorityHighIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
