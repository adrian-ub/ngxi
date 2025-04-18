import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSlideTextMultiple32FilledIcon],svg[fluent-slide-text-multiple-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 4A4.5 4.5 0 0 0 2 8.5v11A4.5 4.5 0 0 0 6.5 24h15a4.5 4.5 0 0 0 4.5-4.5v-11A4.5 4.5 0 0 0 21.5 4zM8 9h7a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2m0 4h12a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2m-1 5a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1m21 3a5 5 0 0 1-5 5H7.101A6.98 6.98 0 0 0 12 28h11a7 7 0 0 0 7-7v-7a6.98 6.98 0 0 0-2-4.899z"></svg:path>`,
})
export class FluentSlideTextMultiple32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
