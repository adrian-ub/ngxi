import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableSimple32LightIcon],svg[fluent-table-simple-32-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7.5A4.5 4.5 0 0 1 7.5 3h17A4.5 4.5 0 0 1 29 7.5v17a4.5 4.5 0 0 1-4.5 4.5h-17A4.5 4.5 0 0 1 3 24.5zM16.5 28h8a3.5 3.5 0 0 0 3.5-3.5v-8H16.5zm-1-11.5H4v8A3.5 3.5 0 0 0 7.5 28h8zm1-1H28v-8A3.5 3.5 0 0 0 24.5 4h-8zM15.5 4h-8A3.5 3.5 0 0 0 4 7.5v8h11.5z"></svg:path>`,
})
export class FluentTableSimple32LightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
