import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonTaskCompleteIcon],svg[carbon-task-complete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22 27.18l-2.59-2.59L18 26l4 4l8-8l-1.41-1.41z"></svg:path><svg:path fill="currentColor" d="M25 5h-3V4a2.006 2.006 0 0 0-2-2h-8a2.006 2.006 0 0 0-2 2v1H7a2.006 2.006 0 0 0-2 2v21a2.006 2.006 0 0 0 2 2h9v-2H7V7h3v3h12V7h3v11h2V7a2.006 2.006 0 0 0-2-2m-5 3h-8V4h8Z"></svg:path>`,
})
export class CarbonTaskCompleteIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
