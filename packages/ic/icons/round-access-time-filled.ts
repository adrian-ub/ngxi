import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundAccessTimeFilledIcon],svg[ic-round-access-time-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M16 16a.996.996 0 0 1-1.41 0l-3.29-3.29A1 1 0 0 1 11 12V8c0-.55.45-1 1-1s1 .45 1 1v3.59l3 3c.39.39.39 1.02 0 1.41"></svg:path>`,
})
export class IcRoundAccessTimeFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
