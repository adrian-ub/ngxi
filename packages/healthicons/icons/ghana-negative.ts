import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsGhanaNegativeIcon],svg[healthicons-ghana-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsGhanaNegative0)"><svg:path d="M20.173 14.732a10 10 0 0 1 1.827-.56v19.596a10 10 0 0 1-6.315-4.242a10 10 0 0 1 4.488-14.794"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zM24 6a2 2 0 0 1 2 2v2.114q.366.053.731.125a14 14 0 0 1 7.169 3.832a2 2 0 0 1-2.829 2.828A10 10 0 0 0 26 14.172v19.596a10 10 0 0 0 5.071-2.727A2 2 0 0 1 33.9 33.87a14 14 0 0 1-7.9 3.957V40a2 2 0 1 1-4 0v-2.173a14 14 0 0 1 0-27.713V8a2 2 0 0 1 2-2" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsGhanaNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsGhanaNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
