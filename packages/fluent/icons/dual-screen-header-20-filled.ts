import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDualScreenHeader20FilledIcon],svg[fluent-dual-screen-header-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 16h-5.5V8H18v6a2 2 0 0 1-2 2m2-9V6a2 2 0 0 0-2-2h-5.5v3zM9.5 7V4H4a2 2 0 0 0-2 2v1zM2 8v6a2 2 0 0 0 2 2h5.5V8z"></svg:path>`,
})
export class FluentDualScreenHeader20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
