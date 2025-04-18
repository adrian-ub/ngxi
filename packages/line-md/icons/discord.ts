import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdDiscordIcon],svg[line-md-discord-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-opacity="0"><svg:circle cx="9" cy="12" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.3s" dur="0.15s" values="0;1"></svg:animate></svg:circle><svg:circle cx="15" cy="12" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.45s" dur="0.15s" values="0;1"></svg:animate></svg:circle></svg:g><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="32" stroke-dashoffset="32" d="M12 6h2l1 -2c0 0 2.5 0.5 4 1.5c3.53 2.35 3 9.5 3 10.5c-1.33 2.17 -5.5 3.5 -5.5 3.5l-1 -2M12 6h-2l-0.97 -2c0 0 -2.5 0.5 -4 1.5c-3.53 2.35 -3 9.5 -3 10.5c1.33 2.17 5.5 3.5 5.5 3.5l1 -2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.7s" values="32;0"></svg:animate></svg:path><svg:path stroke-dasharray="16" stroke-dashoffset="16" d="M5.5 16c5 2.5 8 2.5 13 0"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.4s" values="16;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdDiscordIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
