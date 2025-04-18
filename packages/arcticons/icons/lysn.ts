import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLysnIcon],svg[arcticons-lysn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="26.233" cy="21.635" r="19.136" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.74 45.5c-10.553 0-19.109-8.555-19.109-19.109s8.556-19.109 19.11-19.109s19.11 8.556 19.11 19.11V45.5z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.676 18.751v8h4"></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M23.069 24.751v2.7a2 2 0 0 1-2 2h0a2 2 0 0 1-1.414-.586"></svg:path><svg:path d="M23.069 21.451v3.3a2 2 0 0 1-2 2h0a2 2 0 0 1-2-2v-3.3"></svg:path></svg:g><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.052 26.304c.365.307.759.447 1.645.447h.448c.73 0 1.322-.593 1.322-1.325h0c0-.732-.592-1.325-1.322-1.325h-.897c-.73 0-1.322-.593-1.322-1.325h0c0-.732.592-1.325 1.322-1.325h.448c.886 0 1.28.14 1.645.447m5.983 4.853v-3.3a2 2 0 0 0-2-2h0a2 2 0 0 0-2 2m0 3.3v-5.3"></svg:path>`,
})
export class ArcticonsLysnIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
