import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsDizzyNegativeIcon],svg[healthicons-dizzy-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" fill-rule="evenodd" clip-path="url(#healthiconsDizzyNegative0)" clip-rule="evenodd"><svg:path d="M24 40c8.837 0 16-7.163 16-16S32.837 8 24 8S8 15.163 8 24s7.163 16 16 16m3.293-22.707a1 1 0 0 1 1.414 0l1.793 1.793l1.793-1.793a1 1 0 0 1 1.414 1.414L31.914 20.5l1.793 1.793a1 1 0 0 1-1.414 1.414L30.5 21.914l-1.793 1.793a1 1 0 0 1-1.414-1.414l1.793-1.793l-1.793-1.793a1 1 0 0 1 0-1.414m-13 0a1 1 0 0 1 1.414 0l1.793 1.793l1.793-1.793a1 1 0 0 1 1.414 1.414L18.914 20.5l1.793 1.793a1 1 0 0 1-1.414 1.414L17.5 21.914l-1.793 1.793a1 1 0 0 1-1.414-1.414l1.793-1.793l-1.793-1.793a1 1 0 0 1 0-1.414M31 32c0 3.314-3.134 4-7 4s-7-.686-7-4s3.134-6 7-6s7 2.686 7 6"></svg:path><svg:path d="M48 0H0v48h48zM24 42c9.941 0 18-8.059 18-18S33.941 6 24 6S6 14.059 6 24s8.059 18 18 18"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsDizzyNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsDizzyNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
