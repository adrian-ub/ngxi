import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdPatreonIcon],svg[line-md-patreon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" stroke="currentColor"><svg:path stroke-width="3" d="M4 2.5v0"><svg:animate fill="freeze" attributeName="d" dur="0.4s" values="M4 2.5v0;M4 2.5v19"></svg:animate></svg:path><svg:path fill-opacity="0" stroke-dasharray="40" stroke-dashoffset="40" stroke-width="2" d="M14.88 3.5c3.38 0 6.12 2.74 6.12 6.13c0 3.38 -2.74 6.12 -6.12 6.12c-3.39 0 -6.13 -2.75 -6.13 -6.12c0 -3.39 2.74 -6.13 6.13 -6.13Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.9s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.4s" values="40;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdPatreonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
