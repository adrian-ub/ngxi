import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArchive32FilledIcon],svg[fluent-archive-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5a2 2 0 0 1 2-2h22a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm1 6h24v12.5a5.5 5.5 0 0 1-5.5 5.5h-13A5.5 5.5 0 0 1 4 23.5zm9 3a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2z"></svg:path>`,
})
export class FluentArchive32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
