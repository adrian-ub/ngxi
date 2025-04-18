import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentServer20RegularIcon],svg[fluent-server-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM7 12.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m.5 1.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM5 4.5A2.5 2.5 0 0 1 7.5 2h5A2.5 2.5 0 0 1 15 4.5v11a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 5 15.5zM7.5 3A1.5 1.5 0 0 0 6 4.5v11A1.5 1.5 0 0 0 7.5 17h5a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 12.5 3z"></svg:path>`,
})
export class FluentServer20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
