import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentStatus16FilledIcon],svg[fluent-status-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.354 1.647a2.27 2.27 0 0 0-3.207 0l-4.25 4.25a.5.5 0 0 0-.121.195l-1.25 3.75a.5.5 0 0 0 .632.633l3.75-1.25a.5.5 0 0 0 .196-.121l4.25-4.25a2.27 2.27 0 0 0 0-3.207m-1.367 5.988Q13 7.815 13 8a5 5 0 1 1-4.635-4.987l.884-.883a6 6 0 1 0 4.621 4.621z"></svg:path>`,
})
export class FluentStatus16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
