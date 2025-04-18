import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsApplicationIncompleteOutlinedIcon],svg[eos-icons-application-incomplete-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3v2h22l-.01-1.993A2 2 0 0 0 21 1H3a2 2 0 0 0-2 2m3 1a1 1 0 1 1 1-1a1 1 0 0 1-1 1m3 0a1 1 0 1 1 1-1a1.004 1.004 0 0 1-1 1m5 6a4 4 0 1 0 4 4h-4Z"></svg:path><svg:path fill="currentColor" d="M1 6v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6Zm20 14H3V8h18Z"></svg:path>`,
})
export class EosIconsApplicationIncompleteOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
