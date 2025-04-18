import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentHeadphones20FilledIcon],svg[fluent-headphones-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 10a7 7 0 0 1 14 0v1h-3.5a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5H16a2 2 0 0 0 2-2v-6a8 8 0 1 0-16 0v6a2 2 0 0 0 2 2h2.5a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5H3z"></svg:path>`,
})
export class FluentHeadphones20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
