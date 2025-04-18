import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdFileImportIcon],svg[line-md-file-import-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 10l0 0l2 -2l-3.5 3.5l-3.5 3.5l2 -2l0 0z"><svg:animate fill="freeze" attributeName="d" begin="0.8s" dur="0.2s" values="M11 10l0 0l2 -2l-3.5 3.5l-3.5 3.5l2 -2l0 0z;M11 10l3 3l2 -2l0 7l-7 0l2 -2l-3 -3Z"></svg:animate></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M13.5 3l5.5 5.5v11.5c0 0.55 -0.45 1 -1 1h-12c-0.55 0 -1 -0.45 -1 -1v-16c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path d="M14.5 3.5l2.25 2.25l2.25 2.25z" opacity="0"><svg:animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s" values="M14.5 3.5l2.25 2.25l2.25 2.25z;M14.5 3.5l0 4.5l4.5 0z"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="0.6s" to="1"></svg:set></svg:path></svg:g>`,
})
export class LineMdFileImportIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
