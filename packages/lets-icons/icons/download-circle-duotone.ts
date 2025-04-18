import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsDownloadCircleDuotoneIcon],svg[lets-icons-download-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="6" cy="6" r="6" fill="currentColor" fill-opacity=".25" transform="matrix(0 -1 -1 0 18 20)"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" d="M9.5 7.5L12 5m0 0l2.5 2.5M12 5v10"></svg:path></svg:g>`,
})
export class LetsIconsDownloadCircleDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
