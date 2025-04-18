import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdRotate180Icon],svg[line-md-rotate-180-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="24" stroke-dashoffset="24" d="M12 6c3.31 0 6 2.69 6 6c0 3.31 -2.69 6 -6 6h-2.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="24;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M9 18l3 3M9 18l3 -3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="6;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdRotate180Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
