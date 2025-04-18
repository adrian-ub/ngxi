import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsChromeRestoreVarIcon],svg[proicons-chrome-restore-var-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M2.75 9.75a4 4 0 0 1 4-4h7.5a4 4 0 0 1 4 4v7.5a4 4 0 0 1-4 4h-7.5a4 4 0 0 1-4-4z"></svg:path><svg:path d="M6.75 2.75h7.5a7 7 0 0 1 7 7v7.5"></svg:path></svg:g>`,
})
export class ProiconsChromeRestoreVarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
