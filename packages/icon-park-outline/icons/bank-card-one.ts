import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineBankCardOneIcon],svg[icon-park-outline-bank-card-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M14 13V9a2 2 0 0 1 2-2h26a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2h-2"></svg:path><svg:rect width="30" height="22" x="4" y="19" rx="2"></svg:rect><svg:path d="M4 28h30m0-5v12M4 23v12m7-1h8m6 0h2"></svg:path></svg:g>`,
})
export class IconParkOutlineBankCardOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
