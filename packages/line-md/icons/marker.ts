import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdMarkerIcon],svg[line-md-marker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="48" stroke-dashoffset="48" d="M6 14l11 -11l4 4l-11 11l-4 -4Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="48;0"></svg:animate></svg:path><svg:path stroke-dasharray="20" stroke-dashoffset="20" stroke-width="1" d="M9 17l-2.5 2.5h-4l4.5 -4.5Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="20;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdMarkerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
