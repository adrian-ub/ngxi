import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdCheckAllIcon],svg[line-md-check-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCheckAll0"><svg:g fill="none" stroke="#fff" stroke-dasharray="24" stroke-dashoffset="24" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M2 13.5l4 4l10.75 -10.75"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="24;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-width="6" d="M7.5 13.5l4 4l10.75 -10.75"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.4s" values="24;0"></svg:animate></svg:path><svg:path d="M7.5 13.5l4 4l10.75 -10.75"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.4s" values="24;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCheckAll0)"></svg:rect>`,
})
export class LineMdCheckAllIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
