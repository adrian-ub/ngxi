import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDualScreenMirror20FilledIcon],svg[fluent-dual-screen-mirror-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 16H16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-5.5zm-1-12H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5.5zM5.75 8a.5.5 0 0 1 .432.248l1.75 3A.5.5 0 0 1 7.5 12H4a.5.5 0 0 1-.432-.752l1.75-3A.5.5 0 0 1 5.75 8m8.932.248l1.75 3A.5.5 0 0 1 16 12h-3.5a.5.5 0 0 1-.432-.752l1.75-3a.5.5 0 0 1 .864 0"></svg:path>`,
})
export class FluentDualScreenMirror20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
