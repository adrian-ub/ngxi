import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdBriefcaseRemoveFilledIcon],svg[line-md-briefcase-remove-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdBriefcaseRemoveFilled0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M9 7h11c0.55 0 1 0.45 1 1v11c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-11c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.9s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="16" stroke-dashoffset="16" d="M9 7v-3c0 -0.55 0.45 -1 1 -1h4c0.55 0 1 0.45 1 1v3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="16;0"></svg:animate></svg:path><svg:path fill="#000" fill-opacity="0" stroke="none" d="M19 13c3.31 0 6 2.69 6 6c0 3.31 -2.69 6 -6 6c-3.31 0 -6 -2.69 -6 -6c0 -3.31 2.69 -6 6 -6Z"><svg:set fill="freeze" attributeName="fill-opacity" begin="1.4s" to="1"></svg:set></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M17 17l4 4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.4s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M21 17l-4 4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.6s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdBriefcaseRemoveFilled0)"></svg:rect>`,
})
export class LineMdBriefcaseRemoveFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
