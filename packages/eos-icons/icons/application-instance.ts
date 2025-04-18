import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsApplicationInstanceIcon],svg[eos-icons-application-instance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 6v14a2 2 0 0 0 2 2h18a2.006 2.006 0 0 0 2-2.007V6Zm8 13l.003-4.502L9 10l7 4.5ZM1.01 3.007L1 5h22l-.01-1.993A2 2 0 0 0 21 1H3a2 2 0 0 0-1.99 2.007m2.997 1a1 1 0 1 1 .999-.999a1 1 0 0 1-1 1m2.997 0a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path>`,
})
export class EosIconsApplicationInstanceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
