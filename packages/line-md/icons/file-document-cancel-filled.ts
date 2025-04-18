import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdFileDocumentCancelFilledIcon],svg[line-md-file-document-cancel-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdFileDocumentCancelFilled0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M13.5 3l5.5 5.5v11.5c0 0.55 -0.45 1 -1 1h-12c-0.55 0 -1 -0.45 -1 -1v-16c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.6s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path fill="#000" stroke="#000" d="M14.5 3.5l0 4.5l4.5 0z" opacity="0"><svg:set fill="freeze" attributeName="opacity" begin="0.6s" to="1"></svg:set></svg:path><svg:path d="M13.5 3l5.5 5.5" opacity="0"><svg:set fill="freeze" attributeName="opacity" begin="0.6s" to="1"></svg:set></svg:path><svg:path stroke="#000" stroke-dasharray="12" stroke-dashoffset="12" d="M7 13h10"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.1s" dur="0.2s" values="12;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="8" stroke-dashoffset="8" d="M7 17h7"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.3s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path fill="#000" fill-opacity="0" stroke="#000" stroke-dasharray="32" stroke-dashoffset="32" stroke-width="6" d="M18.5 14c2.48 0 4.5 2.02 4.5 4.5c0 2.48 -2.02 4.5 -4.5 4.5c-2.48 0 -4.5 -2.02 -4.5 -4.5c0 -2.48 2.02 -4.5 4.5 -4.5Z"><svg:set fill="freeze" attributeName="fill-opacity" begin="1.5s" to="1"></svg:set><svg:set fill="freeze" attributeName="stroke-dashoffset" begin="1.5s" to="0"></svg:set></svg:path><svg:path stroke-dasharray="32" stroke-dashoffset="32" d="M18.5 14c2.48 0 4.5 2.02 4.5 4.5c0 2.48 -2.02 4.5 -4.5 4.5c-2.48 0 -4.5 -2.02 -4.5 -4.5c0 -2.48 2.02 -4.5 4.5 -4.5Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.5s" dur="0.4s" values="32;0"></svg:animate></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M16 16l5 5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.9s" dur="0.2s" values="10;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdFileDocumentCancelFilled0)"></svg:rect>`,
})
export class LineMdFileDocumentCancelFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
