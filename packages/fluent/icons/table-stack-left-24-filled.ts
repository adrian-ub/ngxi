import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableStackLeft24FilledIcon],svg[fluent-table-stack-left-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 21h1.75A3.25 3.25 0 0 0 21 17.75V16h-5zm0-6.5h5v-5h-5zm-1.5-5v5h-5v-5zM16 8h5V6.25A3.25 3.25 0 0 0 17.75 3H16zm-1.5-5v5h-5V3.75a.75.75 0 0 1 .75-.75zm0 13v5h-4.25a.75.75 0 0 1-.75-.75V16zM4.5 3.75a.75.75 0 0 0-1.5 0v16.5a.75.75 0 0 0 1.5 0z"></svg:path>`,
})
export class FluentTableStackLeft24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
