import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSearch48FilledIcon],svg[fluent-search-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M31.204 33.325A15.94 15.94 0 0 1 21 37c-8.837 0-16-7.163-16-16S12.163 5 21 5s16 7.163 16 16c0 3.878-1.38 7.434-3.675 10.203l9.236 9.236a1.5 1.5 0 0 1-2.122 2.122zM34 21c0-7.18-5.82-13-13-13S8 13.82 8 21s5.82 13 13 13s13-5.82 13-13"></svg:path>`,
})
export class FluentSearch48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
