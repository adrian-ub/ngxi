import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsCriticalBugIcon],svg[eos-icons-critical-bug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 8h-2.8a6 6 0 0 0-1.82-2L17 4.41L15.6 3l-2.17 2.17A6 6 0 0 0 12 5a6 6 0 0 0-1.41.17L8.42 3L7 4.41L8.63 6a6.06 6.06 0 0 0-1.81 2H4v2h2.1a7 7 0 0 0-.1 1v1H4v2h2v1a7 7 0 0 0 .09 1H4v2h2.82a6 6 0 0 0 10.38 0H20v-2h-2.08a7 7 0 0 0 .08-1v-1h2v-2h-2v-1a7 7 0 0 0-.09-1H20Zm-7 10h-2v-2h2Zm0-4h-2V8h2Z"></svg:path>`,
})
export class EosIconsCriticalBugIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
