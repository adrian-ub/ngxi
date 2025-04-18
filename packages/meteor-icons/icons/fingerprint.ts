import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteorIconsFingerprintIcon],svg[meteor-icons-fingerprint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18a10 10 0 0 0 2-6a4 4 0 0 1 8 0a16 16 0 0 1-1 6m-3-5a14 14 0 0 1-3 8m-6-6a9 9 0 0 0 1-4a8 8 0 0 1 13-6.2M19.5 8a8 8 0 0 1 .5 5"></svg:path>`,
})
export class MeteorIconsFingerprintIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
