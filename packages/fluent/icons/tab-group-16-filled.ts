import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTabGroup16FilledIcon],svg[fluent-tab-group-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm1 4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5A.5.5 0 0 1 4 7m.998 6a2 2 0 0 1-1.732-1h7.732a3 3 0 0 0 3-3V5.268a2 2 0 0 1 1 1.732v2a4 4 0 0 1-4 4z"></svg:path>`,
})
export class FluentTabGroup16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
