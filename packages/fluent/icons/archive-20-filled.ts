import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArchive20FilledIcon],svg[fluent-archive-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4.25C2 3.56 2.56 3 3.25 3h13.5c.69 0 1.25.56 1.25 1.25v1.5C18 6.44 17.44 7 16.75 7H3.25C2.56 7 2 6.44 2 5.75zM3 8h14v6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm5.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z"></svg:path>`,
})
export class FluentArchive20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
