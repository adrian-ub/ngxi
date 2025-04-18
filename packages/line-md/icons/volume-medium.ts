import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdVolumeMediumIcon],svg[line-md-volume-medium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 12c0 0 0 0 0 0c0 0 0 0 0 0Z"><svg:animate fill="freeze" attributeName="d" begin="0.4s" dur="0.2s" values="M16 12c0 0 0 0 0 0c0 0 0 0 0 0Z;M16 16c1.5 -0.71 2.5 -2.24 2.5 -4c0 -1.77 -1 -3.26 -2.5 -4Z"></svg:animate></svg:path><svg:path fill="none" stroke="currentColor" stroke-dasharray="32" stroke-dashoffset="32" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 10h3.5l3.5 -3.5v10.5l-3.5 -3.5h-3.5Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="32;0"></svg:animate></svg:path>`,
})
export class LineMdVolumeMediumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
