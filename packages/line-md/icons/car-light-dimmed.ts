import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdCarLightDimmedIcon],svg[line-md-car-light-dimmed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCarLightDimmed0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="12" stroke-dashoffset="12" d="M12 5.5l-9 2.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="12;0"></svg:animate></svg:path><svg:path stroke-dasharray="12" stroke-dashoffset="12" d="M12 10.5l-9 2.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="12;0"></svg:animate></svg:path><svg:path stroke-dasharray="12" stroke-dashoffset="12" d="M12 15.5l-9 2.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.2s" values="12;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-width="6" d="M21 12c0 -3.31 -3.5 -6.25 -8.25 -6.25c-0.5 0 -1.75 2.75 -1.75 6.25c0 3.5 1.25 6.25 1.75 6.25c4.75 0 8.25 -2.94 8.25 -6.25Z"></svg:path><svg:path stroke-dasharray="40" stroke-dashoffset="40" d="M21 12c0 -3.31 -3.5 -6.25 -8.25 -6.25c-0.5 0 -1.75 2.75 -1.75 6.25c0 3.5 1.25 6.25 1.75 6.25c4.75 0 8.25 -2.94 8.25 -6.25Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="40;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCarLightDimmed0)"></svg:rect>`,
})
export class LineMdCarLightDimmedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
