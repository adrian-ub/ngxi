import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextMore24FilledIcon],svg[fluent-text-more-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.672 2.611a1 1 0 0 0-1.843 0l-6.75 16a1 1 0 0 0 1.843.778L5.773 15h7.954l1.286 3.047q.237-.046.487-.047c.818 0 1.544.393 2 1a1 1 0 0 0-.078-.389zM12.884 13H6.617L9.75 5.573zM10.5 22a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m6.5-1.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m5 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"></svg:path>`,
})
export class FluentTextMore24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
