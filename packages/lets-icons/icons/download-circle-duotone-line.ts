import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsDownloadCircleDuotoneLineIcon],svg[lets-icons-download-circle-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="letsIconsDownloadCircleDuotoneLine0"><svg:g fill="none"><svg:path stroke="#fff" stroke-width="1.2" d="M5.239 14.812a7 7 0 0 0 13.523 0"></svg:path><svg:path fill="#fff" d="m12 4l-.375-.469l.375-.3l.375.3zm.6 9a.6.6 0 1 1-1.2 0zM6.625 7.531l5-4l.75.938l-5 4zm5.75-4l5 4l-.75.938l-5-4zM12.6 4v9h-1.2V4z"></svg:path><svg:circle cx="5" cy="5" r="5" fill="#fff" fill-opacity=".25" transform="matrix(0 -1 -1 0 17 20)"></svg:circle><svg:circle cx="5" cy="5" r="5.3" stroke="silver" stroke-opacity=".25" stroke-width=".6" transform="matrix(0 -1 -1 0 17 20)"></svg:circle></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#letsIconsDownloadCircleDuotoneLine0)"></svg:path>`,
})
export class LetsIconsDownloadCircleDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
