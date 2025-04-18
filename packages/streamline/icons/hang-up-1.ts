import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineHangUp1Icon],svg[streamline-hang-up-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.6 4.736A2.55 2.55 0 0 0 .59 7.244l-.006.502a.86.86 0 0 0 .853.853l2.146-.011a.855.855 0 0 0 .847-.847a.86.86 0 0 1 .853-.853H8.67a.847.847 0 0 1 .853.853a.855.855 0 0 0 .847.847h2.146a.863.863 0 0 0 .853-.853l-.006-.503a2.55 2.55 0 0 0-2.01-2.507a23.1 23.1 0 0 0-8.754.011Z"></svg:path>`,
})
export class StreamlineHangUp1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
