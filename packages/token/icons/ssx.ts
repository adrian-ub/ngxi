import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenSsxIcon],svg[token-ssx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 20.4c0-.099 1.513-4.538 2.27-6.746c.251.43 1.227 1.14 3.126 1.227a.3.3 0 0 0 .24.12h4.55a.902.902 0 0 0 1.537.28a.9.9 0 1 0-1.536-.88H8.636a.3.3 0 0 0-.264.156c-1.729-.054-4.451-1.134-4.11-5.634C4.506 5.677 7.887 3.6 9.61 3.6H21l-2.358 6.85c-.644-.913-2.279-1.3-3.218-1.383A.3.3 0 0 0 15.236 9h-4.551a.899.899 0 1 0 0 .6h4.55a.3.3 0 0 0 .198-.074c2.066.228 4.257 1.324 4.257 5.165c0 3.985-3.46 5.467-5.19 5.71z" clip-rule="evenodd"></svg:path>`,
})
export class TokenSsxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
