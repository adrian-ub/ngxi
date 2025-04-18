import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSlashForward16RegularIcon],svg[fluent-slash-forward-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.44 2.037a.5.5 0 0 1 .273.652l-4.5 11a.5.5 0 0 1-.926-.378l4.5-11a.5.5 0 0 1 .652-.274"></svg:path>`,
})
export class FluentSlashForward16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
