import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextContinuous24RegularIcon],svg[fluent-text-continuous-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.75 5a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5zm5 4a.75.75 0 0 0 0 1.5h11.5a.75.75 0 0 0 0-1.5zM8 13.75a.75.75 0 0 1 .75-.75h11.5a.75.75 0 0 1 0 1.5H8.75a.75.75 0 0 1-.75-.75M3.75 17a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5zm-.53-5.97a.75.75 0 1 1 1.06-1.06l1.5 1.5a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 0 1-1.06-1.06l.97-.97z"></svg:path>`,
})
export class FluentTextContinuous24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
