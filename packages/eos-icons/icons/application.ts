import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsApplicationIcon],svg[eos-icons-application-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3v2h22V3a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2m3 1a1 1 0 1 1 1-1a1 1 0 0 1-1 1m3 0a1 1 0 1 1 1-1a1.003 1.003 0 0 1-1 1M1 6v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6Zm8.1 9.3l1.3 1.3l-.7.7l-.7.7l-2-2l-2-2l2-2l2-2l.7.7l.7.7l-1.3 1.3L7.8 14Zm7.9.7l-2 2l-.7-.7l-.7-.7l1.3-1.3l1.3-1.3l-1.3-1.3l-1.3-1.3l.7-.7l.7-.7l2 2l2 2Z"></svg:path>`,
})
export class EosIconsApplicationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
