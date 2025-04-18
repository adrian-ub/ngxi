import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiPelotonIcon],svg[cbi-peloton-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.774 6.8l1.442-2.5a1.532 1.532 0 0 0-2.654-1.533l-1.451 2.504a7.059 7.059 0 0 0-8.769 9.066l2.67-4.632a4.6 4.6 0 1 1 1.682 6.28l1.533-2.654a1.532 1.532 0 1 0-.561-2.093L5.787 19.7a1.532 1.532 0 0 0 2.654 1.533l1.451-2.506A7.054 7.054 0 0 0 16.774 6.8"></svg:path>`,
})
export class CbiPelotonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
