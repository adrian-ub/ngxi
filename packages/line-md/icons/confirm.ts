import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdConfirmIcon],svg[line-md-confirm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-dasharray="24" stroke-dashoffset="24" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11l6 6l10 -10"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="24;0"></svg:animate></svg:path>`,
})
export class LineMdConfirmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
