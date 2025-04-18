import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdSquareToConfirmSquareTransitionIcon],svg[line-md-square-to-confirm-square-transition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 12v-7c0 -0.55 0.45 -1 1 -1h14c0.55 0 1 0.45 1 1v14c0 0.55 -0.45 1 -1 1h-14c-0.55 0 -1 -0.45 -1 -1Z"></svg:path><svg:path stroke-dasharray="14" stroke-dashoffset="14" d="M8 12l3 3l5 -5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="14;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdSquareToConfirmSquareTransitionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
