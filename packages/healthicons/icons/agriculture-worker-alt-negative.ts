import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsAgricultureWorkerAltNegativeIcon],svg[healthicons-agriculture-worker-alt-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsAgricultureWorkerAltNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM19.5 13a3.5 3.5 0 1 1 0-7a3.5 3.5 0 0 1 0 7M32 16c.364 0 .706.097 1 .268V15h-1a3 3 0 0 1-3-3V6h2v6a1 1 0 0 0 1 1h1V6h2v7h1a1 1 0 0 0 1-1V6h2v6a3 3 0 0 1-3 3h-1v26a1 1 0 1 1-2 0V19.732A2 2 0 0 1 32 20h-7v20a2 2 0 1 1-4 0v-9h-3v9a2 2 0 1 1-4 0V27.917A6.002 6.002 0 0 1 15 16zm-20 6a2 2 0 0 1 2-2v4a2 2 0 0 1-2-2" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsAgricultureWorkerAltNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsAgricultureWorkerAltNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
