import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentToggleRight48FilledIcon],svg[fluent-toggle-right-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M44 24c0-5.523-4.477-10-10-10H14C8.477 14 4 18.477 4 24s4.477 10 10 10h20c5.523 0 10-4.477 10-10m-5.5 0a5 5 0 1 1-10 0a5 5 0 0 1 10 0"></svg:path>`,
})
export class FluentToggleRight48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
