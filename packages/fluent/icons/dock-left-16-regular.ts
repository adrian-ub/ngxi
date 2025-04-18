import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDockLeft16RegularIcon],svg[fluent-dock-left-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M12 3a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM6.001 4H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.001V4zM12 4H7.001v8H12a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z" fill="currentColor" fill-rule="nonzero"></svg:path>`,
})
export class FluentDockLeft16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
