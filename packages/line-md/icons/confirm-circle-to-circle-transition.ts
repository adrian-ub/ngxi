import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdConfirmCircleToCircleTransitionIcon],svg[line-md-confirm-circle-to-circle-transition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 12c0 -4.97 4.03 -9 9 -9c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9Z"></svg:path><svg:path stroke-dasharray="14" d="M8 12l3 3l5 -5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="0;14"></svg:animate></svg:path></svg:g>`,
})
export class LineMdConfirmCircleToCircleTransitionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
