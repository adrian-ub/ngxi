import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMinimize24RegularIcon],svg[fluent-minimize-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M3.755 12.5h16.492a.75.75 0 1 0 0-1.5H3.755a.75.75 0 0 0 0 1.5z" fill="currentColor"></svg:path></svg:g>`,
})
export class FluentMinimize24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
