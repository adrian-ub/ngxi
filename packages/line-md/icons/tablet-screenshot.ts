import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdTabletScreenshotIcon],svg[line-md-tablet-screenshot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5h0v14h0zM22 5h0v14h0z"><svg:animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s" values="M2 5h0v14h0zM22 5h0v14h0z;M2 5h3v14h-3zM22 5h-3v14h3z"></svg:animate></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="72" stroke-dashoffset="72" d="M12 5h9c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-18c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="72;0"></svg:animate></svg:path><svg:path stroke-dasharray="4" stroke-dashoffset="4" d="M8 9h2M8 9v2M16 15h-2M16 15v-2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="4;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdTabletScreenshotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
