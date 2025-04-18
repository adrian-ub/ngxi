import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsIudNegativeIcon],svg[healthicons-iud-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsIudNegative0)"><svg:path d="M22 40a2 2 0 1 1 4 0a2 2 0 0 1-4 0"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zM11 6a1 1 0 1 1 0-2h12a1 1 0 0 1 1 1a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H25v30.126A4.002 4.002 0 0 1 24 44a4 4 0 0 1-1-7.874V6z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsIudNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsIudNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
