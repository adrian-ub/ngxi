import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdTextBoxMultipleToTextBoxTransitionIcon],svg[line-md-text-box-multiple-to-text-box-transition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M10 6h8M10 10h8M10 14h5M22 3v14c0 0.55 -0.45 1 -1 1h-14c-0.55 0 -1 -0.45 -1 -1v-14c0 -0.55 0.45 -1 1 -1h14c0.55 0 1 0.45 1 1Z"><svg:animate fill="freeze" attributeName="d" begin="0.5s" dur="0.4s" values="M10 6h8M10 10h8M10 14h5M22 3v14c0 0.55 -0.45 1 -1 1h-14c-0.55 0 -1 -0.45 -1 -1v-14c0 -0.55 0.45 -1 1 -1h14c0.55 0 1 0.45 1 1Z;M8 8h8M8 12h8M8 16h5M20 5v14c0 0.55 -0.45 1 -1 1h-14c-0.55 0 -1 -0.45 -1 -1v-14c0 -0.55 0.45 -1 1 -1h14c0.55 0 1 0.45 1 1Z"></svg:animate></svg:path><svg:path stroke-dasharray="36" d="M2 6v15c0 0.55 0.45 1 1 1h15"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="0;36"></svg:animate></svg:path></svg:g>`,
})
export class LineMdTextBoxMultipleToTextBoxTransitionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
