import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneLedDiodeIcon],svg[icon-park-twotone-led-diode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTLedDiode0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" d="M6 24a2 2 0 0 1 2-2h32a2 2 0 0 1 2 2v6H6z"></svg:path><svg:path d="M19 30v14m10-14v14"></svg:path><svg:path fill="#555" d="M24 4c-7.732 0-14 6.268-14 14v4h28v-4c0-7.732-6.268-14-14-14"></svg:path><svg:circle cx="24" cy="13" r="3" fill="#555"></svg:circle></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTLedDiode0)"></svg:path>`,
})
export class IconParkTwotoneLedDiodeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
