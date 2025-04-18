import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdTextBoxTwotoneToTextBoxMultipleTwotoneTransitionIcon],svg[line-md-text-box-twotone-to-text-box-multiple-twotone-transition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity=".3" d="M20 5v14c0 0.55 -0.45 1 -1 1h-14c-0.55 0 -1 -0.45 -1 -1v-14c0 -0.55 0.45 -1 1 -1h14c0.55 0 1 0.45 1 1Z"><svg:animate fill="freeze" attributeName="d" dur="0.4s" values="M20 5v14c0 0.55 -0.45 1 -1 1h-14c-0.55 0 -1 -0.45 -1 -1v-14c0 -0.55 0.45 -1 1 -1h14c0.55 0 1 0.45 1 1Z;M22 3v14c0 0.55 -0.45 1 -1 1h-14c-0.55 0 -1 -0.45 -1 -1v-14c0 -0.55 0.45 -1 1 -1h14c0.55 0 1 0.45 1 1Z"></svg:animate></svg:path><svg:path d="M8 8h8M8 12h8M8 16h5"><svg:animate fill="freeze" attributeName="d" dur="0.4s" values="M8 8h8M8 12h8M8 16h5;M10 6h8M10 10h8M10 14h5"></svg:animate></svg:path><svg:path stroke-dasharray="36" stroke-dashoffset="36" d="M2 6v15c0 0.55 0.45 1 1 1h15"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.5s" values="36;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdTextBoxTwotoneToTextBoxMultipleTwotoneTransitionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
