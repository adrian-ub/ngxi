import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsMergeOutlinedIcon],svg[eos-icons-merge-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 11a2.99 2.99 0 0 0-2.815 1.997c-2.995-.014-5.26-.129-6.726-.886a6.2 6.2 0 0 1-3.358-4.326A3.008 3.008 0 1 0 4 7.816v9.368a3 3 0 1 0 2 0v-5.257a8.6 8.6 0 0 0 2.541 1.962c1.847.952 4.36 1.092 7.642 1.108A2.995 2.995 0 1 0 19 11M5 21a1 1 0 1 1 1-1a1 1 0 0 1-1 1M5 6a1 1 0 1 1 1-1a1 1 0 0 1-1 1m14 9a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path>`,
})
export class EosIconsMergeOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
