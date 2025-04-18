import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdRedditIcon],svg[line-md-reddit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdReddit0"><svg:g fill="#fff"><svg:path fill-opacity="0" stroke="#fff" stroke-dasharray="48" stroke-dashoffset="48" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9.42c4.42 0 8 2.37 8 5.29c0 2.92 -3.58 5.29 -8 5.29c-4.42 0 -8 -2.37 -8 -5.29c0 -2.92 3.58 -5.29 8 -5.29Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.6s" dur="0.4s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="48;0"></svg:animate></svg:path><svg:circle cx="7.24" cy="11.97" r="2.24" opacity="0"><svg:animate fill="freeze" attributeName="cx" begin="1s" dur="0.2s" values="7.24;3.94"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="1s" to="1"></svg:set></svg:circle><svg:circle cx="16.76" cy="11.97" r="2.24" opacity="0"><svg:animate fill="freeze" attributeName="cx" begin="1s" dur="0.2s" values="16.76;20.06"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="1s" to="1"></svg:set></svg:circle><svg:circle cx="18.45" cy="4.23" r="1.61" opacity="0"><svg:set fill="freeze" attributeName="opacity" begin="2.6s" to="1"></svg:set></svg:circle></svg:g><svg:path fill="none" stroke="#fff" stroke-dasharray="12" stroke-dashoffset="12" stroke-linecap="round" stroke-linejoin="round" stroke-width=".8" d="M12 8.75l1.18 -5.64l5.03 1.07"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="2.4s" dur="0.2s" values="12;0"></svg:animate></svg:path><svg:g fill-opacity="0"><svg:circle cx="8.45" cy="13.59" r="1.61"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.2s" dur="0.4s" values="0;1"></svg:animate></svg:circle><svg:circle cx="15.55" cy="13.59" r="1.61"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.6s" dur="0.4s" values="0;1"></svg:animate></svg:circle></svg:g><svg:path fill="none" stroke="#000" stroke-dasharray="10" stroke-dashoffset="10" stroke-linecap="round" stroke-linejoin="round" stroke-width=".8" d="M8.47 17.52c0 0 0.94 1.06 3.53 1.06c2.58 0 3.53 -1.06 3.53 -1.06"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="2s" dur="0.2s" values="10;0"></svg:animate></svg:path></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdReddit0)"></svg:rect>`,
})
export class LineMdRedditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
