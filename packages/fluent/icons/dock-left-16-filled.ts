import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDockLeft16FilledIcon],svg[fluent-dock-left-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M12.004 3a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm0 1H7v8h5.005a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z" fill="currentColor" fill-rule="nonzero"></svg:path>`,
})
export class FluentDockLeft16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
