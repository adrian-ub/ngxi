import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsAllergiesNegativeIcon],svg[healthicons-allergies-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" fill-rule="evenodd" clip-path="url(#healthiconsAllergiesNegative0)" clip-rule="evenodd"><svg:path d="M48 0H0v48h48zM31 25.731V9a2 2 0 1 0-4 0v14h-2V6a2 2 0 1 0-4 0v17h-2V9a2 2 0 1 0-4 0v16.111h-2V15a2 2 0 1 0-4 0v17c0 6.627 5.373 12 12 12h1.422a12 12 0 0 0 10.553-6.287l6.938-12.816a2.552 2.552 0 0 0-4.36-2.642L32.83 26.29c-.552.817-1.829.427-1.829-.56"></svg:path><svg:path d="M19.022 28.983a1 1 0 1 1-2 .001a1 1 0 0 1 2-.001m5 .996a1 1 0 1 1-2 .001a1 1 0 0 1 2-.001m-3.995 5.003a1 1 0 1 0-.002-2a1 1 0 0 0 .002 2m5.998-2.005a1 1 0 1 1-2 .002a1 1 0 0 1 2-.002m1.004 5a1 1 0 1 0-.001-2a1 1 0 0 0 .001 2m2.996-6.003a1 1 0 1 1-2 .001a1 1 0 0 1 2-.001M22.03 38.98a1 1 0 1 0-.002-2a1 1 0 0 0 .002 2m-4.001-1.996a1 1 0 1 1-2 .001a1 1 0 0 1 2-.002m-3.003-2.998a1 1 0 1 0-.002-2a1 1 0 0 0 .002 2"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsAllergiesNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsAllergiesNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
