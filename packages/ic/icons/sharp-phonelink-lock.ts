import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpPhonelinkLockIcon],svg[ic-sharp-phonelink-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 1H7v5h2V4h10v16H9v-2H7v5h14zM10.8 11V9.5C10.8 8.1 9.4 7 8 7S5.2 8.1 5.2 9.5V11H4v6h8v-6zm-1.3 0h-3V9.5c0-.8.7-1.3 1.5-1.3s1.5.5 1.5 1.3z"></svg:path>`,
})
export class IcSharpPhonelinkLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
