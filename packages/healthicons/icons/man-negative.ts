import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsManNegativeIcon],svg[healthicons-man-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsManNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM30 18.82c.217.513.41 1.19.564 1.995C30.97 22.931 31 25.273 31 26a2 2 0 1 0 4 0c0-.773-.026-3.431-.508-5.94c-.238-1.236-.616-2.607-1.265-3.717C32.576 15.228 31.405 14 29.556 14H18.444c-1.849 0-3.02 1.228-3.671 2.343c-.649 1.11-1.027 2.48-1.265 3.717C13.026 22.569 13 25.227 13 26a2 2 0 1 0 4 0c0-.727.03-3.069.436-5.185c.155-.805.347-1.482.564-1.994V42a2 2 0 0 0 3.994.153l1-13A2 2 0 0 0 23 29h2q0 .076.006.153l1 13A2 2 0 0 0 30 42zM28 8a4 4 0 1 1-8 0a4 4 0 0 1 8 0" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsManNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsManNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
