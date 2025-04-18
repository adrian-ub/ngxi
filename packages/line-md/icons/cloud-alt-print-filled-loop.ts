import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdCloudAltPrintFilledLoopIcon],svg[line-md-cloud-alt-print-filled-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCloudAltPrintFilledLoop0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M7 19h11c2.21 0 4 -1.79 4 -4c0 -2.21 -1.79 -4 -4 -4h-1v-1c0 -2.76 -2.24 -5 -5 -5c-2.42 0 -4.44 1.72 -4.9 4h-0.1c-2.76 0 -5 2.24 -5 5c0 2.76 2.24 5 5 5Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="0.7s" to="0"></svg:set></svg:path><svg:g fill="#fff" stroke="none" opacity="0"><svg:circle cx="12" cy="10" r="6"><svg:animate attributeName="cx" begin="0.7s" dur="30s" repeatCount="indefinite" values="12;11;12;13;12"></svg:animate></svg:circle><svg:rect width="9" height="8" x="8" y="12"></svg:rect><svg:rect width="15" height="12" x="1" y="8" rx="6"><svg:animate attributeName="x" begin="0.7s" dur="21s" repeatCount="indefinite" values="1;0;1;2;1"></svg:animate></svg:rect><svg:rect width="13" height="10" x="10" y="10" rx="5"><svg:animate attributeName="x" begin="0.7s" dur="17s" repeatCount="indefinite" values="10;9;10;11;10"></svg:animate></svg:rect><svg:set fill="freeze" attributeName="opacity" begin="0.7s" to="1"></svg:set></svg:g><svg:g fill="#000" fill-opacity="0" stroke="none"><svg:circle cx="12" cy="10" r="4"><svg:animate attributeName="cx" begin="0.7s" dur="30s" repeatCount="indefinite" values="12;11;12;13;12"></svg:animate></svg:circle><svg:rect width="9" height="6" x="8" y="12"></svg:rect><svg:rect width="11" height="8" x="3" y="10" rx="4"><svg:animate attributeName="x" begin="0.7s" dur="21s" repeatCount="indefinite" values="3;2;3;4;3"></svg:animate></svg:rect><svg:rect width="9" height="6" x="12" y="12" rx="3"><svg:animate attributeName="x" begin="0.7s" dur="17s" repeatCount="indefinite" values="12;11;12;13;12"></svg:animate></svg:rect><svg:set fill="freeze" attributeName="fill-opacity" begin="0.7s" to="1"></svg:set><svg:animate fill="freeze" attributeName="opacity" begin="0.7s" dur="0.5s" values="1;0"></svg:animate></svg:g><svg:g stroke="none"><svg:path fill="#fff" d="M6 11h12v0h-12z"><svg:animate fill="freeze" attributeName="d" begin="1.3s" dur="0.22s" values="M6 11h12v0h-12z;M6 11h12v11h-12z"></svg:animate></svg:path><svg:path fill="#000" d="M8 13h8v0h-8z"><svg:animate fill="freeze" attributeName="d" begin="1.34s" dur="0.14s" values="M8 13h8v0h-8z;M8 13h8v7h-8z"></svg:animate></svg:path><svg:path fill="#fff" fill-opacity="0" d="M9 12h6v1H9zM9 14h6v1H9zM9 16h6v1H9zM9 18h6v1H9z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.4s" dur="0.1s" values="0;1"></svg:animate><svg:animatemotion begin="1.5s" calcMode="linear" dur="1.5s" path="M0 0v2" repeatCount="indefinite"></svg:animatemotion></svg:path></svg:g></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCloudAltPrintFilledLoop0)"></svg:rect>`,
})
export class LineMdCloudAltPrintFilledLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
