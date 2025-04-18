import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsColdChainNegativeIcon],svg[healthicons-cold-chain-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsColdChainNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm15.33 11a1 1 0 0 1 1 1v3.268l2.83-1.634a1 1 0 1 1 1 1.732L17.33 17l2.83 1.634a1 1 0 1 1-1 1.732l-2.83-1.634V22a1 1 0 0 1-2 0v-3.268l-2.83 1.634a1 1 0 1 1-1-1.732L13.33 17l-2.83-1.634a1 1 0 1 1 1-1.732l2.83 1.634V12a1 1 0 0 1 1-1M25 29.755a8 8 0 1 0 10 0V9.357C35 6.398 32.761 4 30 4s-5 2.398-5 5.357zm8-7.694c-1.457.024-2.822-.33-4.018-.64c-.73-.19-1.396-.362-1.982-.422V9.357c0-1.775 1.343-3.214 3-3.214s3 1.439 3 3.214v.619h-2a1 1 0 0 0 0 2h2v2h-2a1 1 0 1 0 0 2h2v2h-2a1 1 0 1 0 0 2h2z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsColdChainNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsColdChainNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
