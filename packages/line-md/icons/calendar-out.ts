import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdCalendarOutIcon],svg[line-md-calendar-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="16" height="16" x="4" y="4" stroke-dasharray="64" rx="1"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.5s" values="0;64"></svg:animate></svg:rect><svg:path stroke-dasharray="6" d="M7 4V2M17 4V2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="0;6"></svg:animate></svg:path><svg:path stroke-dasharray="12" d="M7 11H17"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="0;12"></svg:animate></svg:path><svg:path stroke-dasharray="9" d="M7 15H14"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="0;9"></svg:animate></svg:path></svg:g><svg:rect width="14" height="3" x="5" y="5" fill="currentColor"><svg:animate fill="freeze" attributeName="height" begin="0.5s" dur="0.2s" values="3;0"></svg:animate></svg:rect>`,
})
export class LineMdCalendarOutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
