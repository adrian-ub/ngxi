import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiCarpStreamerIcon],svg[openmoji-carp-streamer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#61b2e4" d="M58.692 19.154c2.923 0 7.308-2.462 7.308-2.462v9.846s-2.923-4.923-7.308-2.461S47 26.538 47 26.538L45.538 29h-7.307l-1.462-2.461A20.8 20.8 0 0 1 28 24.077v-3.692s4.385-3.556 8.77-3.556v-2.462s9.042-3 17.538 1.094v2.462a7.1 7.1 0 0 0 4.384 1.23"></svg:path><svg:path fill="#d22f27" d="M56.692 40.154c2.923 0 7.308-2.462 7.308-2.462v9.846s-2.923-4.923-7.308-2.461S45 47.539 45 47.539L43.538 50h-7.307l-1.462-2.461A20.8 20.8 0 0 1 26 45.076v-3.692s4.385-3.556 8.77-3.556v-2.462s9.042-3 17.538 1.095v2.461a7.1 7.1 0 0 0 4.384 1.23"></svg:path><svg:g stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="none" d="M18 67V8"></svg:path><svg:circle cx="18" cy="7" r="1"></svg:circle><svg:circle cx="18" cy="7" r="2"></svg:circle><svg:circle cx="36" cy="21.367" r="1"></svg:circle><svg:path fill="none" d="M42 20s3 0 4 2"></svg:path><svg:circle cx="34" cy="42.367" r="1"></svg:circle><svg:path fill="none" d="M40 41s3 0 4 2M28 20.385L18 22l10 2.077m-2 17.308L18 43l8 2.077m32.692-25.923c2.923 0 7.308-2.462 7.308-2.462v9.846s-2.923-4.923-7.308-2.461S47 26.538 47 26.538L45.538 29h-7.307l-1.462-2.461A20.8 20.8 0 0 1 28 24.077v-3.692s4.385-3.556 8.77-3.556v-2.462s9.042-3 17.538 1.094v2.462a7.1 7.1 0 0 0 4.384 1.23"></svg:path><svg:path fill="none" d="M56.692 40.154c2.923 0 7.308-2.462 7.308-2.462v9.846s-2.923-4.923-7.308-2.461S45 47.539 45 47.539L43.538 50h-7.307l-1.462-2.461A20.8 20.8 0 0 1 26 45.076v-3.692s4.385-3.556 8.77-3.556v-2.462s9.042-3 17.538 1.095v2.461a7.1 7.1 0 0 0 4.384 1.23"></svg:path></svg:g>`,
})
export class OpenmojiCarpStreamerIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
