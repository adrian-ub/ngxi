import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdStarHalfTwotoneIcon],svg[line-md-star-half-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity="0" d="M12 3l-2.35 5.76l-6.21 0.46l4.76 4.02l-1.49 6.04l5.29 -3.28Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.5s" dur="0.15s" values="0;0.3"></svg:animate></svg:path><svg:path fill="none" stroke="currentColor" stroke-dasharray="36" stroke-dashoffset="36" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3l-2.35 5.76l-6.21 0.46l4.76 4.02l-1.49 6.04l5.29 -3.28"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="36;0"></svg:animate></svg:path>`,
})
export class LineMdStarHalfTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
