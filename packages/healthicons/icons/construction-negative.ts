import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsConstructionNegativeIcon],svg[healthicons-construction-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsConstructionNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM17.952 4A7 7 0 0 0 11 11h2a5 5 0 0 1 4.952-5v3a2 2 0 0 0 2 2h1.762v9.253l-1.19 1.19v19.843a3 3 0 0 0 3 3h1.952a3 3 0 0 0 3-3V21.443l-1.19-1.19V11h2.666a1 1 0 0 0 1-1V9H32v2h4V4h-4v1h-1.048a1 1 0 0 0-1-1zm7.334 7h-1.572v10.08l-1.19 1.191v19.015a1 1 0 0 0 1 1h1.952a1 1 0 0 0 1-1V22.27l-1.19-1.19z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsConstructionNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsConstructionNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
