import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdCloudAltDownloadIcon],svg[line-md-cloud-alt-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M7 19h11c2.21 0 4 -1.79 4 -4c0 -2.21 -1.79 -4 -4 -4h-1v-1c0 -2.76 -2.24 -5 -5 -5c-2.42 0 -4.44 1.72 -4.9 4h-0.1c-2.76 0 -5 2.24 -5 5c0 2.76 2.24 5 5 5Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:g fill="currentColor" stroke="none"><svg:path d="M10.5 10h3v0h-3z"><svg:animate fill="freeze" attributeName="d" begin="0.7s" dur="0.2s" values="M10.5 10h3v0h-3z;M10.5 10h3v4h-3z"></svg:animate></svg:path><svg:path d="M8 13h8l-4 0z"><svg:animate fill="freeze" attributeName="d" begin="0.9s" dur="0.1s" values="M8 13h8l-4 0z;M8 13h8l-4 4z"></svg:animate></svg:path></svg:g></svg:g>`,
})
export class LineMdCloudAltDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
