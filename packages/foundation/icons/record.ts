import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[foundationRecordIcon],svg[foundation-record-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M50 12.908c-20.485 0-37.092 16.606-37.092 37.092S29.514 87.092 50 87.092S87.092 70.486 87.092 50S70.485 12.908 50 12.908m0 49.283c-6.733 0-12.191-5.458-12.191-12.191S43.267 37.809 50 37.809S62.191 43.267 62.191 50S56.733 62.191 50 62.191"></svg:path>`,
})
export class FoundationRecordIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
