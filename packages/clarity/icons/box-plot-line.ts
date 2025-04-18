import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityBoxPlotLineIcon],svg[clarity-box-plot-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 5H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M4 29V7h28v22Z" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M7 12h10v14H7zm1.6 12.4h6.8v-5.6H8.6zm6.8-10.8H8.6v3.6h6.8z" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="currentColor" d="M19 24h10V10H19zm1.6-12.4h6.8v5.6h-6.8zm6.8 10.8h-6.8v-3.6h6.8z" class="clr-i-outline clr-i-outline-path-3"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityBoxPlotLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
