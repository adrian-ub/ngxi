import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdRedditCircleIcon],svg[line-md-reddit-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdRedditCircle0"><svg:path fill="#fff" fill-opacity="0" stroke="#fff" stroke-dasharray="64" stroke-dashoffset="64" stroke-width="2" d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.6s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="64;0"></svg:animate></svg:path><svg:path fill-opacity="0" d="M12 9.71c3.22 0 5.83 1.82 5.83 4.06c0 2.24 -2.61 4.06 -5.83 4.06c-3.22 0 -5.83 -1.82 -5.83 -4.06c0 -2.24 2.61 -4.06 5.83 -4.06Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.1s" dur="0.4s" values="0;1"></svg:animate></svg:path><svg:circle cx="8.99" cy="11.99" r="1.45" opacity="0"><svg:animate fill="freeze" attributeName="cx" begin="1.5s" dur="0.2s" values="8.99;6.79"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="1.5s" to="1"></svg:set></svg:circle><svg:circle cx="15.01" cy="11.99" r="1.45" opacity="0"><svg:animate fill="freeze" attributeName="cx" begin="1.5s" dur="0.2s" values="15.01;17.21"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="1.5s" to="1"></svg:set></svg:circle><svg:circle cx="16.18" cy="7.01" r="1.04" opacity="0"><svg:set fill="freeze" attributeName="opacity" begin="3.1s" to="1"></svg:set></svg:circle><svg:path fill="none" stroke="#000" stroke-dasharray="10" stroke-dashoffset="10" stroke-linecap="round" stroke-linejoin="round" stroke-width=".54" d="M12 9.91l0.76 -3.64l3.24 0.71"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="2.9s" dur="0.2s" values="10;0"></svg:animate></svg:path><svg:g fill="#fff" fill-opacity="0"><svg:circle cx="9.71" cy="13.04" r="1.04"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.7s" dur="0.4s" values="0;1"></svg:animate></svg:circle><svg:circle cx="14.29" cy="13.04" r="1.04"><svg:animate fill="freeze" attributeName="fill-opacity" begin="2.1s" dur="0.4s" values="0;1"></svg:animate></svg:circle></svg:g><svg:path fill="none" stroke="#fff" stroke-dasharray="6" stroke-dashoffset="6" stroke-linecap="round" stroke-linejoin="round" stroke-width=".54" d="M9.72 15.6c0 0 0.61 0.69 2.28 0.69c1.67 -0 2.28 -0.69 2.28 -0.69"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="2.5s" dur="0.2s" values="6;0"></svg:animate></svg:path></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdRedditCircle0)"></svg:rect>`,
})
export class LineMdRedditCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
