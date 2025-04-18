import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdFileSearchFilledIcon],svg[line-md-file-search-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdFileSearchFilled0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M13.5 3l5.5 5.5v11.5c0 0.55 -0.45 1 -1 1h-12c-0.55 0 -1 -0.45 -1 -1v-16c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.6s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="36" stroke-dashoffset="36" d="M14.83 15.83c-1.56 1.56 -4.1 1.56 -5.66 0c-1.56 -1.56 -1.56 -4.1 0 -5.66c1.56 -1.56 4.1 -1.56 5.66 0c1.56 1.56 1.56 4.1 0 5.66l4.67 4.67"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.1s" dur="0.5s" values="36;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdFileSearchFilled0)"></svg:rect>`,
})
export class LineMdFileSearchFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
