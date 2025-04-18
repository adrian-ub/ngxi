import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDockLeft20FilledIcon],svg[fluent-dock-left-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M16 4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 1H8v10h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z" fill="currentColor" fill-rule="nonzero"></svg:path>`,
})
export class FluentDockLeft20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
