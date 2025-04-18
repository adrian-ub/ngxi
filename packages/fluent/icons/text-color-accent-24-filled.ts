import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextColorAccent24FilledIcon],svg[fluent-text-color-accent-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 17a2 2 0 0 1 2-2h11.999a2 2 0 0 1 2 2v2.5a2 2 0 0 1-2 2H5.5a2 2 0 0 1-2-2z"></svg:path>`,
})
export class FluentTextColorAccent24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
