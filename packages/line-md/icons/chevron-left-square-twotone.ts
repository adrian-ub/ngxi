import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdChevronLeftSquareTwotoneIcon],svg[line-md-chevron-left-square-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M20 12v7c0 0.55 -0.45 1 -1 1h-14c-0.55 0 -1 -0.44 -1 -1v-14c0 -0.55 0.45 -1 1 -1h14c0.55 0 1 0.45 1 1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate><svg:animate fill="freeze" attributeName="fill-opacity" begin="1s" dur="0.15s" values="0;0.3"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M10 12l3 -3M10 12l3 3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.3s" values="6;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdChevronLeftSquareTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
