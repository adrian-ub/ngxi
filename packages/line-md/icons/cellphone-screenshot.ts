import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdCellphoneScreenshotIcon],svg[line-md-cellphone-screenshot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2h12v0h-12zM6 22h12v0h-12z"><svg:animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s" values="M6 2h12v0h-12zM6 22h12v0h-12z;M6 2h12v3h-12zM6 22h12v-3h-12z"></svg:animate></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M12 2h5c0.55 0 1 0.45 1 1v18c0 0.55 -0.45 1 -1 1h-10c-0.55 0 -1 -0.45 -1 -1v-18c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="4" stroke-dashoffset="4" d="M10 8h2M10 8v2M14 16h-2M14 16v-2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="4;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdCellphoneScreenshotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
