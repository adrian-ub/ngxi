import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsRunningWaterNegativeIcon],svg[healthicons-running-water-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsRunningWaterNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm7 42V23H6V12h1V6h2v6h1v11H9v19zM19 8h5a1 1 0 1 0 0-2H12a1 1 0 1 0 0 2h5v3h-5v13h13V11h-6zm9 16v6h14v-6h-2v-3c0-5.523-4.477-10-10-10h-3v10h1a2 2 0 0 1 2 2v1zm7.5 18c1.933 0 3.5-1.628 3.5-3.636C39 35.182 35.5 32 35.5 32S32 35.182 32 38.364C32 40.372 33.567 42 35.5 42" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsRunningWaterNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsRunningWaterNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
