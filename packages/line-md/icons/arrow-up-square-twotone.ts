import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdArrowUpSquareTwotoneIcon],svg[line-md-arrow-up-square-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M12 20l7 0c0.55 0 1 -0.45 1 -1l0 -14c0 -0.55 -0.44 -1 -1 -1l-14 0c-0.55 0 -1 0.45 -1 1l0 14c0 0.55 0.45 1 1 1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.1s" dur="0.15s" values="0;0.3"></svg:animate></svg:path><svg:path stroke-dasharray="12" stroke-dashoffset="12" d="M12 17l0 -9.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="12;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M12 7l4 4M12 7l-4 4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdArrowUpSquareTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
