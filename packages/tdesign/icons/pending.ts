import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignPendingIcon],svg[tdesign-pending-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m11-9c0 6.075-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1s11 4.925 11 11m-9.996 1.004H11V11h2.004zm-5 0H6V11h2.004zm10 0H16V11h2.004z"></svg:path>`,
})
export class TdesignPendingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
