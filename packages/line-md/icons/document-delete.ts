import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdDocumentDeleteIcon],svg[line-md-document-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M13 3l6 6v12h-14v-18h8"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="14" stroke-dashoffset="14" stroke-width="1" d="M12.5 3v5.5h6.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="14;0"></svg:animate></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M9 11l6 6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="10;0"></svg:animate></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M15 11l-6 6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.1s" dur="0.2s" values="10;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdDocumentDeleteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
