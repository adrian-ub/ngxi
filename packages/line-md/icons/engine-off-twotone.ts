import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdEngineOffTwotoneIcon],svg[line-md-engine-off-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdEngineOffTwotone0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="48" stroke-dashoffset="48" d="M11 9h6v10h-6.5l-2 -2h-2.5v-6.5l1.5 -1.5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.7s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="48;0"></svg:animate></svg:path><svg:path fill="#fff" fill-opacity="0" d="M17 13h0v-3h0v8h0v-3h0z" opacity="0"><svg:animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s" values="M17 13h0v-3h0v8h0v-3h0z;M17 13h4v-3h1v8h-1v-3h-4z"></svg:animate><svg:set fill="freeze" attributeName="fill-opacity" begin="0.8s" to="1"></svg:set><svg:set fill="freeze" attributeName="opacity" begin="0.6s" to="1"></svg:set></svg:path><svg:path d="M6 14h0M6 11v6" opacity="0"><svg:animate fill="freeze" attributeName="d" begin="0.8s" dur="0.2s" values="M6 14h0M6 11v6;M6 14h-4M2 11v6"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="0.8s" to="1"></svg:set></svg:path><svg:path d="M11 9v0M8 9h6" opacity="0"><svg:animate fill="freeze" attributeName="d" begin="1s" dur="0.2s" values="M11 9v0M8 9h6;M11 9v-4M8 5h6"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="1s" to="1"></svg:set></svg:path><svg:path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M0 11h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.3s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M0 13h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.3s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdEngineOffTwotone0)"></svg:rect>`,
})
export class LineMdEngineOffTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
