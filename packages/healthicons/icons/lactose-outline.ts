import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsLactoseOutlineIcon],svg[healthicons-lactose-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M28.393 19h-8.786a1 1 0 0 0-.998.933l-1.4 21A1 1 0 0 0 18.207 42h11.586a1 1 0 0 0 .998-1.066l-1.4-21a1 1 0 0 0-.998-.934m-8.786-2a3 3 0 0 0-2.994 2.8l-1.4 21a3 3 0 0 0 2.994 3.2h11.586a3 3 0 0 0 2.994-3.2l-1.4-21a3 3 0 0 0-2.994-2.8z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M19 17h10a5 5 0 0 0-10 0m5-7a7 7 0 0 0-7 7v.714c0 .71.576 1.286 1.286 1.286h11.428c.71 0 1.286-.576 1.286-1.286V17a7 7 0 0 0-7-7m-3 12a1 1 0 0 1 1 1v16a1 1 0 1 1-2 0V23a1 1 0 0 1 1-1m6 0a1 1 0 0 1 1 1v16a1 1 0 1 1-2 0V23a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path><svg:path d="M22 15a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0m6-6a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-1-3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-3 2a1 1 0 1 1-2 0a1 1 0 0 1 2 0m1 8a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path></svg:g>`,
})
export class HealthiconsLactoseOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
