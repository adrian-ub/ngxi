import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggGoogleTasksIcon],svg[gg-google-tasks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.768 5.714a2 2 0 0 1 3.064 2.572L10.833 19.01a2 2 0 1 1-3.064-2.57zM3 12.74a2 2 0 1 1 4 0a2 2 0 0 1-4 0"></svg:path>`,
})
export class GgGoogleTasksIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
