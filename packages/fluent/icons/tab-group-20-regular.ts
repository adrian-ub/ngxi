import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTabGroup20RegularIcon],svg[fluent-tab-group-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 6.5A2.5 2.5 0 0 1 3.5 4h11A2.5 2.5 0 0 1 17 6.5v5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 1 11.5zM3.5 5A1.5 1.5 0 0 0 2 6.5v5A1.5 1.5 0 0 0 3.5 13h11a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 14.5 5zm2.004 11a2.5 2.5 0 0 1-2-1h11a3.5 3.5 0 0 0 3.5-3.5v-5c.607.456 1 1.182 1 2v3a4.5 4.5 0 0 1-4.5 4.5zM5.5 8.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z"></svg:path>`,
})
export class FluentTabGroup20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
