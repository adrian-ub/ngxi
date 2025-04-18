import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsRobotLineIcon],svg[majesticons-robot-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 20H5v-2m3 2v-4h4m-4 4h4m4 0h3v-2m-3 2v-4h-4m4 4h-4m0-4v4m0-11H9a4 4 0 0 0-4 4v0m7-4h3a4 4 0 0 1 4 4v0m-7-4V5m7 8h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1m0-5v5M5 14.5v2M5 13H4a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1m0-5v5m10-5"></svg:path><svg:circle cx="12" cy="5" r="1"></svg:circle></svg:g>`,
})
export class MajesticonsRobotLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
