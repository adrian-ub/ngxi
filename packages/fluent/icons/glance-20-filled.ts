import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentGlance20FilledIcon],svg[fluent-glance-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 14.5v1A1.5 1.5 0 0 0 4.5 17h3A1.5 1.5 0 0 0 9 15.5v-1A1.5 1.5 0 0 0 7.5 13h-3A1.5 1.5 0 0 0 3 14.5m0-10v5A1.5 1.5 0 0 0 4.5 11h3A1.5 1.5 0 0 0 9 9.5v-5A1.5 1.5 0 0 0 7.5 3h-3A1.5 1.5 0 0 0 3 4.5m8 0v1A1.5 1.5 0 0 0 12.5 7h3A1.5 1.5 0 0 0 17 5.5v-1A1.5 1.5 0 0 0 15.5 3h-3A1.5 1.5 0 0 0 11 4.5M12.5 9a1.5 1.5 0 0 0-1.5 1.5v5a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 15.5 9z"></svg:path>`,
})
export class FluentGlance20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
