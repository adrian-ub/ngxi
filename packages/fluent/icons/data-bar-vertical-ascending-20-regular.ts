import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDataBarVerticalAscending20RegularIcon],svg[fluent-data-bar-vertical-ascending-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3a2 2 0 0 1 2 2v10a2 2 0 1 1-4 0V5a2 2 0 0 1 2-2m1 2a1 1 0 1 0-2 0v10a1 1 0 1 0 2 0zm-4 3a2 2 0 1 0-4 0v7a2 2 0 1 0 4 0zm-2-1a1 1 0 0 1 1 1v7a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1m-3 4a2 2 0 1 0-4 0v4a2 2 0 1 0 4 0zm-2-1a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1"></svg:path>`,
})
export class FluentDataBarVerticalAscending20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
