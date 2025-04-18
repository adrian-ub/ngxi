import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonTaskAddIcon],svg[carbon-task-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M31 24h-4v-4h-2v4h-4v2h4v4h2v-4h4z"></svg:path><svg:path fill="currentColor" d="M25 5h-3V4a2.006 2.006 0 0 0-2-2h-8a2.006 2.006 0 0 0-2 2v1H7a2.006 2.006 0 0 0-2 2v21a2.006 2.006 0 0 0 2 2h10v-2H7V7h3v3h12V7h3v9h2V7a2.006 2.006 0 0 0-2-2m-5 3h-8V4h8Z"></svg:path>`,
})
export class CarbonTaskAddIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
