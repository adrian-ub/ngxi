import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignPendingFilledIcon],svg[tdesign-pending-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1S1 5.925 1 12s4.925 11 11 11m-6-9.996V11h2.004v2.004zm5 0V11h2.004v2.004zm7.004 0H16V11h2.004z"></svg:path>`,
})
export class TdesignPendingFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
