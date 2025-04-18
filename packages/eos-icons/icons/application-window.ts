import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsApplicationWindowIcon],svg[eos-icons-application-window-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 1H3a2 2 0 0 0-2 2v2h22V3a2 2 0 0 0-2-2M4 4a1 1 0 1 1 1-1a1 1 0 0 1-1 1m3 0a1 1 0 1 1 1-1a1.003 1.003 0 0 1-1 1m16 6V6H1v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2Z"></svg:path>`,
})
export class EosIconsApplicationWindowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
