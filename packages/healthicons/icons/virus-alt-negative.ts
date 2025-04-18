import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsVirusAltNegativeIcon],svg[healthicons-virus-alt-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsVirusAltNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM20.4 5.9a1 1 0 1 0 0 2H23v2.636a13.44 13.44 0 0 0-7.813 3.237l-1.923-1.923l1.543-1.543a1 1 0 1 0-1.414-1.414l-4.5 4.5a1 1 0 1 0 1.414 1.414l1.543-1.543l1.923 1.923A13.44 13.44 0 0 0 10.537 23H7.9v-2.6a1 1 0 1 0-2 0v7.2a1 1 0 1 0 2 0V25h2.637a13.44 13.44 0 0 0 3.236 7.813l-1.923 1.923l-1.543-1.543a1 1 0 0 0-1.414 1.414l4.5 4.5a1 1 0 0 0 1.414-1.414l-1.543-1.543l1.923-1.923A13.44 13.44 0 0 0 23 37.463V40.1h-2.6a1 1 0 1 0 0 2h7.2a1 1 0 1 0 0-2H25v-2.637a13.44 13.44 0 0 0 7.813-3.236l1.923 1.923l-1.543 1.543a1 1 0 0 0 1.414 1.414l4.5-4.5a1 1 0 1 0-1.414-1.414l-1.543 1.543l-1.923-1.923A13.44 13.44 0 0 0 37.464 25H40.1v2.6a1 1 0 1 0 2 0v-7.2a1 1 0 1 0-2 0V23h-2.636a13.44 13.44 0 0 0-3.237-7.813l1.923-1.923l1.543 1.543a1 1 0 0 0 1.414-1.414l-4.5-4.5a1 1 0 1 0-1.414 1.414l1.543 1.543l-1.923 1.923A13.44 13.44 0 0 0 25 10.536V7.9h2.6a1 1 0 1 0 0-2zm11.7 17.65a1.35 1.35 0 1 1-2.7 0a1.35 1.35 0 0 1 2.7 0m-7.65 8.55a1.35 1.35 0 1 0 0-2.7a1.35 1.35 0 0 0 0 2.7M23.1 20.4a2.7 2.7 0 1 1-5.4 0a2.7 2.7 0 0 1 5.4 0" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsVirusAltNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsVirusAltNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
