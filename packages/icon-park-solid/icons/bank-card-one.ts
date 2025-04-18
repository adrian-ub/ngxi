import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidBankCardOneIcon],svg[icon-park-solid-bank-card-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSBankCardOne0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#fff" d="M14 13V9a2 2 0 0 1 2-2h26a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2h-2"></svg:path><svg:rect width="30" height="22" x="4" y="19" fill="#fff" stroke="#fff" rx="2"></svg:rect><svg:path stroke="#000" d="M4 28h30"></svg:path><svg:path stroke="#fff" d="M34 23v12M4 23v12"></svg:path><svg:path stroke="#000" d="M11 34h8m6 0h2"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSBankCardOne0)"></svg:path>`,
})
export class IconParkSolidBankCardOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
