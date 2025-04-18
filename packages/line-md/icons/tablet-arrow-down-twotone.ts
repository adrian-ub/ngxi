import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdTabletArrowDownTwotoneIcon],svg[line-md-tablet-arrow-down-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5h0v14h0zM22 5h0v14h0z"><svg:animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s" values="M2 5h0v14h0zM22 5h0v14h0z;M2 5h3v14h-3zM22 5h-3v14h3z"></svg:animate></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="72" stroke-dashoffset="72" d="M12 5h9c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-18c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.9s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="72;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M12 9v6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.05s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M12 15l3 -3M12 15l-3 -3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.25s" dur="0.2s" values="6;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdTabletArrowDownTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
