import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAppFolder16RegularIcon],svg[fluent-app-folder-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5a1 1 0 0 1 1-1h1.5a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm2.5 0H5v1.5h1.5zM5 8.5a1 1 0 0 0-1 1V11a1 1 0 0 0 1 1h1.5a1 1 0 0 0 1-1V9.5a1 1 0 0 0-1-1zm0 1h1.5V11H5zM8.5 5a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1H9.5a1 1 0 0 1-1-1zM11 5H9.5v1.5H11zM9.5 8.5a1 1 0 0 0-1 1V11a1 1 0 0 0 1 1H11a1 1 0 0 0 1-1V9.5a1 1 0 0 0-1-1zm0 1H11V11H9.5zM2 4.5A2.5 2.5 0 0 1 4.5 2h7A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5zM4.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3z"></svg:path>`,
})
export class FluentAppFolder16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
