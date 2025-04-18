import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdLogoutIcon],svg[line-md-logout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="36" stroke-dashoffset="36" d="M12 4h-7c-0.55 0 -1 0.45 -1 1v14c0 0.55 0.45 1 1 1h7"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="36;0"></svg:animate></svg:path><svg:path stroke-dasharray="14" stroke-dashoffset="14" d="M9 12h11.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="14;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M20.5 12l-3.5 -3.5M20.5 12l-3.5 3.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="6;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdLogoutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
