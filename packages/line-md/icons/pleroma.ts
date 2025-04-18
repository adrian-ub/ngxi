import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdPleromaIcon],svg[line-md-pleroma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6 2C6 2 6.75 2 7.5 2H11v0h-5z"><svg:animate fill="freeze" attributeName="d" dur="0.4s" values="M6 2C6 2 6.75 2 7.5 2H11v0h-5z;M6 3.5C6 2.75 6.75 2 7.5 2H11v20h-5z"></svg:animate></svg:path><svg:path d="M13.5 2h0v8.5c0 0.75 0 1.5 0 1.5h0z"><svg:animate fill="freeze" attributeName="d" begin="0.5s" dur="0.2s" values="M13.5 2h0v8.5c0 0.75 0 1.5 0 1.5h0z;M13.5 2h5v8.5c0 0.75 -0.75 1.5 -1.5 1.5h-3.5z"></svg:animate></svg:path><svg:path d="M13.5 17h0v0c0 0 0 0 0 0h0z"><svg:animate fill="freeze" attributeName="d" begin="0.8s" dur="0.2s" values="M13.5 17h0v0c0 0 0 0 0 0h0z;M13.5 17h5v3.5c0 0.75 -0.75 1.5 -1.5 1.5h-3.5z"></svg:animate></svg:path></svg:g>`,
})
export class LineMdPleromaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
