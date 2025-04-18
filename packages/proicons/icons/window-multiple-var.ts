import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsWindowMultipleVarIcon],svg[proicons-window-multiple-var-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M2.75 6.75a4 4 0 0 1 4-4h7.5a4 4 0 0 1 4 4v7.5a4 4 0 0 1-4 4h-7.5a4 4 0 0 1-4-4z"></svg:path><svg:path d="M21.25 6.75v7.5a7 7 0 0 1-7 7h-7.5m-4-14.273h15.5"></svg:path></svg:g>`,
})
export class ProiconsWindowMultipleVarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
