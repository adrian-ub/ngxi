import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixDownloadFullIcon],svg[ix-download-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M426.667 426.666v42.667H85.333v-42.667zm-149.32-213.179v119.168l48.915-48.92l30.17 30.17l-100.419 100.419l-100.418-100.419l30.17-30.17l48.915 48.877V213.487zm-96.014-85.488v64h-64v-64zm106.667 0v64h-64v-64zm106.667 0v64h-64v-64zM181.333 42.666v64h-64v-64zm106.667 0v64h-64v-64zm106.667 0v64h-64v-64z"></svg:path>`,
})
export class IxDownloadFullIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
