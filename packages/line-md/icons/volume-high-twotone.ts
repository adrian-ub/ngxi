import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdVolumeHighTwotoneIcon],svg[line-md-volume-high-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14 12c0 0 0 0 0 0c0 0 0 0 0 0Z"><svg:animate fill="freeze" attributeName="d" begin="0.4s" dur="0.2s" values="M14 12c0 0 0 0 0 0c0 0 0 0 0 0Z;M14 16c1.5 -0.71 2.5 -2.24 2.5 -4c0 -1.77 -1 -3.26 -2.5 -4Z"></svg:animate></svg:path><svg:path d="M14 12c0 0 0 0 0 0c0 0 0 0 0 0v0c0 0 0 0 0 0c0 0 0 0 0 0Z"><svg:animate fill="freeze" attributeName="d" begin="0.4s" dur="0.4s" values="M14 12c0 0 0 0 0 0c0 0 0 0 0 0v0c0 0 0 0 0 0c0 0 0 0 0 0Z;M14 3.23c4 0.91 7 4.49 7 8.77c0 4.28 -3 7.86 -7 8.77v-2.07c2.89 -0.86 5 -3.53 5 -6.7c0 -3.17 -2.11 -5.85 -5 -6.71Z"></svg:animate></svg:path></svg:g><svg:path fill="currentColor" fill-opacity="0" stroke="currentColor" stroke-dasharray="32" stroke-dashoffset="32" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h3.5l3.5 -3.5v10.5l-3.5 -3.5h-3.5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.8s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="32;0"></svg:animate></svg:path>`,
})
export class LineMdVolumeHighTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
