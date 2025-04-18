import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableAltText24FilledIcon],svg[fluent-table-alt-text-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 21h1.67c-.11-.313-.17-.65-.17-1v-4H9.5zM21 9.5V11h-5V9.5zm-6.5 0V11H14a3 3 0 0 0-3 3v.5H9.5v-5zM21 8V6.25A3.25 3.25 0 0 0 17.75 3H16v5zm-6.5-5h-5v5h5zM8 3H6.25A3.25 3.25 0 0 0 3 6.25V8h5zM3 9.5v5h5v-5zM3 16v1.75A3.25 3.25 0 0 0 6.25 21H8v-5zm11-4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2zm0 3.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5"></svg:path>`,
})
export class FluentTableAltText24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
