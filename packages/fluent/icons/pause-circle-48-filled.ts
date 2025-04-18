import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPauseCircle48FilledIcon],svg[fluent-pause-circle-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20m-4.75-28.5c.69 0 1.25.56 1.25 1.25v14.5a1.25 1.25 0 1 1-2.5 0v-14.5c0-.69.56-1.25 1.25-1.25m8.25 1.25a1.25 1.25 0 1 1 2.5 0v14.5a1.25 1.25 0 1 1-2.5 0z"></svg:path>`,
})
export class FluentPauseCircle48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
