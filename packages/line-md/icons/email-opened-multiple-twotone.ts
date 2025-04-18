import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdEmailOpenedMultipleTwotoneIcon],svg[line-md-email-opened-multiple-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity="0" d="M14 13l-8 -5l8 -5l8 5l-8 5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.8s" dur="0.15s" values="0;0.3"></svg:animate></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M5 8.06c0 -0.35 0.18 -0.67 0.48 -0.85l8.52 -5.21l8.52 5.21c0.3 0.18 0.48 0.5 0.48 0.85v9.94c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-9.94Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="36" stroke-dashoffset="36" d="M19 23h-17c-0.55 0 -1 -0.45 -1 -1v-13"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.3s" values="36;0"></svg:animate></svg:path><svg:path stroke-dasharray="24" stroke-dashoffset="24" d="M5 8.5l9 5.5l9 -5.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="24;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdEmailOpenedMultipleTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
