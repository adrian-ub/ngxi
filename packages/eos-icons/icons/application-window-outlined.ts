import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsApplicationWindowOutlinedIcon],svg[eos-icons-application-window-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3v2h22V3a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2m3 1a.987.987 0 0 1-.993-.992A1 1 0 0 1 4 2a1.013 1.013 0 0 1 1.006 1.008A1 1 0 0 1 4 4m3 0a1 1 0 1 1 1-1a1.004 1.004 0 0 1-1 1M1 6v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6Zm20 14H3V8h18Z"></svg:path>`,
})
export class EosIconsApplicationWindowOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
