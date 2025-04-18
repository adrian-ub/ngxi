import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsDownloadCircleLightIcon],svg[lets-icons-download-circle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" d="M5.239 14.812a7 7 0 0 0 13.523 0"></svg:path><svg:path fill="currentColor" d="m12 4l-.312-.39l.312-.25l.312.25zm.5 9a.5.5 0 0 1-1 0zM6.688 7.61l5-4l.624.78l-5 4zm5.624-4l5 4l-.624.78l-5-4zM12.5 4v9h-1V4z"></svg:path></svg:g>`,
})
export class LetsIconsDownloadCircleLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
