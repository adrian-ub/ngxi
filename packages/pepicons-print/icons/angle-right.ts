import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPrintAngleRightIcon],svg[pepicons-print-angle-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M15.812 11.729a1.5 1.5 0 0 1-.176.252l-4.984 5.98a1.5 1.5 0 0 1-2.304-1.921l4.2-5.04l-4.2-5.04a1.5 1.5 0 1 1 2.304-1.92l5 6a1.5 1.5 0 0 1 .16 1.689" opacity=".2"></svg:path><svg:path d="M7.116 4.32a.5.5 0 1 1 .768-.64l5 6a.5.5 0 0 1-.768.64z"></svg:path><svg:path d="M7.884 16.32a.5.5 0 0 1-.768-.64l5-6a.5.5 0 1 1 .768.64z"></svg:path></svg:g>`,
})
export class PepiconsPrintAngleRightIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
