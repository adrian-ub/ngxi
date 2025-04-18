import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhProjectsendIcon],svg[whh-projectsend-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M122 281L592 10q27-15 56.5-7T693 37l321 555q13 23 9 48q-307 0-553-100T122 281m847 422l-538 311q-26 15-55.5 7.5T330 987L0 448q142 115 402.5 184T969 703"></svg:path>`,
})
export class WhhProjectsendIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
