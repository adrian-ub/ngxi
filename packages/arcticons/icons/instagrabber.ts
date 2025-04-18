import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsInstagrabberIcon],svg[arcticons-instagrabber-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.053" d="M24 35.441a1.22 1.22 0 0 1-.966-.476l-7.554-9.846a1.217 1.217 0 0 1 .966-1.957h2.996l-6.632-8.645a1.217 1.217 0 0 1 .966-1.957h20.448a1.218 1.218 0 0 1 .966 1.957l-6.632 8.645h2.996a1.218 1.218 0 0 1 .966 1.957l-7.554 9.846a1.22 1.22 0 0 1-.966.476"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path>`,
})
export class ArcticonsInstagrabberIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
