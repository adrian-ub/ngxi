import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkWarningIcon],svg[nrk-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.233 1L1 21h22L12.767 1zM12 3.891L19.73 19H4.27zM13.2 16.4a1.2 1.2 0 1 1-2.4 0a1.2 1.2 0 0 1 2.4 0M13 14h-2v-4h2z" clip-rule="evenodd"></svg:path>`,
})
export class NrkWarningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
