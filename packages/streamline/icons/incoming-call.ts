import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineIncomingCallIcon],svg[streamline-incoming-call-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.53 12.823a2.7 2.7 0 0 1-3.37-.36l-.38-.38a.91.91 0 0 1 0-1.28l1.6-1.59a.9.9 0 0 1 1.27 0v0a.91.91 0 0 0 1.28 0l2.55-2.55a.91.91 0 0 0 0-1.28v0a.9.9 0 0 1 0-1.27l1.54-1.6a.91.91 0 0 1 1.28 0l.38.38a2.7 2.7 0 0 1 .41 3.37a24.2 24.2 0 0 1-6.56 6.56M2 5.5h3.5V2m0 3.5l-5-5"></svg:path>`,
})
export class StreamlineIncomingCallIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
