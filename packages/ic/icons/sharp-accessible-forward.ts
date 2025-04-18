import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpAccessibleForwardIcon],svg[ic-sharp-accessible-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="18" cy="4.54" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M15 17h-2c0 1.65-1.35 3-3 3s-3-1.35-3-3s1.35-3 3-3v-2c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5m5-3.5h-3.86l1.67-3.67C18.42 8.5 17.44 7 15.96 7h-5.2c-.81 0-1.54.47-1.87 1.2L8.22 10l1.92.53l.65-1.53H13l-3.12 7H18v5h2z"></svg:path>`,
})
export class IcSharpAccessibleForwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
