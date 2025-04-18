import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFolderProhibited28FilledIcon],svg[fluent-folder-prohibited-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6.75A3.75 3.75 0 0 1 5.75 3h3.672c.729 0 1.428.29 1.944.805L13.25 5.69l-2.944 2.945A1.25 1.25 0 0 1 9.422 9H2zm.004 3.75v9.75A3.75 3.75 0 0 0 5.754 24H14.5A7.5 7.5 0 0 1 26 14.401V9.75A3.75 3.75 0 0 0 22.25 6h-7.19l-3.695 3.695a2.75 2.75 0 0 1-1.944.805zM20.5 26a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13m0-1.5a4.98 4.98 0 0 1-2.965-.974l6.991-6.991A5 5 0 0 1 20.5 24.5m2.965-9.026l-6.991 6.991a5 5 0 0 1 6.991-6.991"></svg:path>`,
})
export class FluentFolderProhibited28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
