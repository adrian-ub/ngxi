import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTransmissionIcon],svg[hugeicons-transmission-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M5.6 22A1.6 1.6 0 0 0 4 20.4M8.8 22A4.8 4.8 0 0 0 4 17.2m8 4.8a8 8 0 0 0-8-8"></svg:path><svg:path d="M5 11V9.5c0-3.287 0-4.931.908-6.038a4 4 0 0 1 .554-.554C7.57 2 9.212 2 12.5 2c3.287 0 4.931 0 6.038.908a4 4 0 0 1 .554.554C20 4.57 20 6.212 20 9.5V17c0 .93 0 1.394-.077 1.78a4 4 0 0 1-3.143 3.143C16.394 22 15.93 22 15 22"></svg:path></svg:g>`,
})
export class HugeiconsTransmissionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
