import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsCardiogramENegativeIcon],svg[healthicons-cardiogram-e-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsCardiogramENegative0)"><svg:path d="M14 9a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1zm-3 21a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1m1 4a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2z"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zM15 6a3 3 0 0 0-3 3H9a3 3 0 0 0-3 3v9h7.035l3.298-5.534l2 7.339L20.51 20h5.258a1 1 0 1 1 0 2H21.49l-4.034 5.195l-1.815-6.661L14.171 23H6v16a3 3 0 0 0 3 3h20a3 3 0 0 0 3-3V12a3 3 0 0 0-3-3h-3a3 3 0 0 0-3-3zm21 12a3 3 0 1 1 6 0v3h-6zm0 20V23h6v15l-3 4z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsCardiogramENegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsCardiogramENegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
