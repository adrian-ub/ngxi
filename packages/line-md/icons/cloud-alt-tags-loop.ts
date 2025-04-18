import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdCloudAltTagsLoopIcon],svg[line-md-cloud-alt-tags-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCloudAltTagsLoop0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M7 19h11c2.21 0 4 -1.79 4 -4c0 -2.21 -1.79 -4 -4 -4h-1v-1c0 -2.76 -2.24 -5 -5 -5c-2.42 0 -4.44 1.72 -4.9 4h-0.1c-2.76 0 -5 2.24 -5 5c0 2.76 2.24 5 5 5Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="0.7s" to="0"></svg:set></svg:path><svg:g fill="#fff" stroke="none" opacity="0"><svg:circle cx="12" cy="10" r="6"><svg:animate attributeName="cx" begin="0.7s" dur="30s" repeatCount="indefinite" values="12;11;12;13;12"></svg:animate></svg:circle><svg:rect width="9" height="8" x="8" y="12"></svg:rect><svg:rect width="15" height="12" x="1" y="8" rx="6"><svg:animate attributeName="x" begin="0.7s" dur="21s" repeatCount="indefinite" values="1;0;1;2;1"></svg:animate></svg:rect><svg:rect width="13" height="10" x="10" y="10" rx="5"><svg:animate attributeName="x" begin="0.7s" dur="17s" repeatCount="indefinite" values="10;9;10;11;10"></svg:animate></svg:rect><svg:set fill="freeze" attributeName="opacity" begin="0.7s" to="1"></svg:set></svg:g><svg:g fill="#000" fill-opacity="0" stroke="none"><svg:circle cx="12" cy="10" r="4"><svg:animate attributeName="cx" begin="0.7s" dur="30s" repeatCount="indefinite" values="12;11;12;13;12"></svg:animate></svg:circle><svg:rect width="9" height="6" x="8" y="12"></svg:rect><svg:rect width="11" height="8" x="3" y="10" rx="4"><svg:animate attributeName="x" begin="0.7s" dur="21s" repeatCount="indefinite" values="3;2;3;4;3"></svg:animate></svg:rect><svg:rect width="9" height="6" x="12" y="12" rx="3"><svg:animate attributeName="x" begin="0.7s" dur="17s" repeatCount="indefinite" values="12;11;12;13;12"></svg:animate></svg:rect><svg:set fill="freeze" attributeName="fill-opacity" begin="0.7s" to="1"></svg:set></svg:g><svg:g stroke-dasharray="6" stroke-dashoffset="6" stroke-linecap="square" stroke-linejoin="miter"><svg:path d="M7 14l2 2M7 14l2 -2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.3s" values="6;0"></svg:animate><svg:animatemotion begin="1s" calcMode="linear" dur="6s" keyPoints="0;0.25;0.5;0.75;1" keyTimes="0;0.1;0.5;0.8;1" path="M0 0h-1h2z" repeatCount="indefinite"></svg:animatemotion></svg:path><svg:path d="M15 14l-2 2M15 14l-2 -2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.3s" values="6;0"></svg:animate><svg:animatemotion begin="1s" calcMode="linear" dur="6s" keyPoints="0;0.25;0.5;0.75;1" keyTimes="0;0.1;0.5;0.8;1" path="M0 0h1h-2z" repeatCount="indefinite"></svg:animatemotion></svg:path></svg:g></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCloudAltTagsLoop0)"></svg:rect>`,
})
export class LineMdCloudAltTagsLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
