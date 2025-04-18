import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentOpenFolder48FilledIcon],svg[fluent-open-folder-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M34.625 6.125a7.5 7.5 0 0 1 7.5 7.5v9a1.5 1.5 0 0 1-3 0v-9a4.5 4.5 0 0 0-4.5-4.5h-21.25a4.5 4.5 0 0 0-4.5 4.5v21a4.5 4.5 0 0 0 4.5 4.5h9.25a1.5 1.5 0 0 1 0 3h-9.25a7.5 7.5 0 0 1-7.5-7.5v-21a7.5 7.5 0 0 1 7.5-7.5zM18 19.5a1.5 1.5 0 0 1 1.5-1.5h13a1.5 1.5 0 0 1 0 3h-9.379l14.44 14.44a1.5 1.5 0 0 1-2.122 2.12L21 23.122V32.5a1.5 1.5 0 0 1-3 0z"></svg:path>`,
})
export class FluentOpenFolder48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
