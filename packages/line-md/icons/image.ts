import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdImageIcon],svg[line-md-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="72" stroke-dashoffset="72" d="M3 14v-9h18v14h-18v-5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="72;0"></svg:animate></svg:path><svg:path stroke-dasharray="24" stroke-dashoffset="24" stroke-width="1" d="M3 16l4 -3l3 2l6 -5l5 4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.4s" values="24;0"></svg:animate></svg:path></svg:g><svg:circle cx="7.5" cy="9.5" r="1.5" fill="currentColor" fill-opacity="0"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1s" dur="0.2s" values="0;1"></svg:animate></svg:circle>`,
})
export class LineMdImageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
