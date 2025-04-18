import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdClipboardMinusIcon],svg[line-md-clipboard-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="72" stroke-dashoffset="72" d="M12 3h7v18h-14v-18h7Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="72;0"></svg:animate></svg:path><svg:path stroke-dasharray="12" stroke-dashoffset="12" stroke-width="1" d="M14.5 3.5v3h-5v-3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="12;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M9 13h6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdClipboardMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
