import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentVideo16FilledIcon],svg[fluent-video-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 5.5A2.5 2.5 0 0 1 3.5 3h4A2.5 2.5 0 0 1 10 5.5v5A2.5 2.5 0 0 1 7.5 13h-4A2.5 2.5 0 0 1 1 10.5zm12.036 6.278L10.9 10.304q.02-.14.02-.283v-4.04q0-.144-.02-.283l2.136-1.474a1.25 1.25 0 0 1 1.96 1.028v5.498a1.25 1.25 0 0 1-1.96 1.028"></svg:path>`,
})
export class FluentVideo16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
