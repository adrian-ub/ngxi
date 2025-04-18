import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhHammeraltIcon],svg[whh-hammeralt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992.5 992.5q-31.5 31.5-76 31.5T841 993L608 760q-38-38-30-91L389 480q-76 61-165 96Q77 500 0 352q48-120 140.5-212T353 0q147 77 224 224q-36 90-97 165l189 189q53-8 91 30l233 233q31 31 31 75.5t-31.5 76"></svg:path>`,
})
export class WhhHammeraltIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
