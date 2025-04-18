import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdChatTwotoneIcon],svg[line-md-chat-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="72" stroke-dashoffset="72" d="M3 19.5v-15.5c0 -0.55 0.45 -1 1 -1h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-14.5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="72;0"></svg:animate></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M8 7h8"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.85s" dur="0.2s" values="10;0"></svg:animate></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M8 10h8"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.15s" dur="0.2s" values="10;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M8 13h4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.45s" dur="0.2s" values="6;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdChatTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
