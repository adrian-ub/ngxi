import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdTelegramIcon],svg[line-md-telegram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M21 5l-2.5 15M21 5l-12 8.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="24" stroke-dashoffset="24" d="M21 5l-19 7.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="24;0"></svg:animate></svg:path><svg:path stroke-dasharray="14" stroke-dashoffset="14" d="M18.5 20l-9.5 -6.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.3s" values="14;0"></svg:animate></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M2 12.5l7 1"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.3s" values="10;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M12 16l-3 3M9 13.5l0 5.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.3s" values="8;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdTelegramIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
