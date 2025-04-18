import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdHomeMdAltTwotoneIcon],svg[line-md-home-md-alt-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity="0" d="M10 14h4v6h-4Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.1s" dur="0.15s" values="0;0.3"></svg:animate></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="16" stroke-dashoffset="16" d="M5 21h14"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="16;0"></svg:animate></svg:path><svg:path stroke-dasharray="14" stroke-dashoffset="14" d="M5 21v-13M19 21v-13"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="14;0"></svg:animate></svg:path><svg:path stroke-dasharray="24" stroke-dashoffset="24" d="M9 21v-8h6v8"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.4s" values="24;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M2 10l10 -8l10 8"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.6s" values="28;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdHomeMdAltTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
