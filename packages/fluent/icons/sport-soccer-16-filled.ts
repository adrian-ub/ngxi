import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSportSoccer16FilledIcon],svg[fluent-sport-soccer-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 8a6.5 6.5 0 1 1 13 0a6.5 6.5 0 0 1-13 0m4.143-4.97a5.5 5.5 0 0 0-1.888 1.473l.647 2.104l1.006.335L7.5 5.352V4.268zM2.536 8.634c.1.865.4 1.67.853 2.365h1.904l.635-.635l-.823-2.47l-1.024-.341zm4.35 4.752a5.5 5.5 0 0 0 2.228 0l.79-1.776l-.611-.61H6.707l-.61.61zM12.61 11a5.5 5.5 0 0 0 .843-2.285L11.91 7.557l-1.015.338l-.823 2.47l.635.635zm-.38-6.513a5.5 5.5 0 0 0-1.874-1.458L8.5 4.268v1.084l2.092 1.59l1.004-.334z"></svg:path>`,
})
export class FluentSportSoccer16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
