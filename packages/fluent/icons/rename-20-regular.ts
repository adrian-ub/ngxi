import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRename20RegularIcon],svg[fluent-rename-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 2a.5.5 0 0 0 0 1h1v14h-1a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-1V3h1a.5.5 0 0 0 0-1zm-4 2h4v1h-4A1.5 1.5 0 0 0 3 6.5v7A1.5 1.5 0 0 0 4.5 15h4v1h-4A2.5 2.5 0 0 1 2 13.5v-7A2.5 2.5 0 0 1 4.5 4m11 11h-4v1h4a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 15.5 4h-4v1h4A1.5 1.5 0 0 1 17 6.5v7a1.5 1.5 0 0 1-1.5 1.5"></svg:path>`,
})
export class FluentRename20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
