import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDataBarVerticalAscending24FilledIcon],svg[fluent-data-bar-vertical-ascending-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.251 3a2.25 2.25 0 0 0-2.249 2.25v13.5a2.249 2.249 0 1 0 4.498 0V5.25A2.25 2.25 0 0 0 18.251 3m-6.5 4a2.25 2.25 0 0 0-2.249 2.25v9.5a2.249 2.249 0 1 0 4.498 0v-9.5A2.25 2.25 0 0 0 11.751 7m-6.5 4a2.25 2.25 0 0 0-2.25 2.25v5.5a2.25 2.25 0 1 0 4.5 0v-5.5A2.25 2.25 0 0 0 5.25 11"></svg:path>`,
})
export class FluentDataBarVerticalAscending24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
